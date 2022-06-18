const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id: Int): Team
    equiments: [Equipment]
    suppies: [Supply]
  }

  type Mutation {
    insertEquipment(
      id: String,
      used_by: String,
      count: Int,
      new_or_used: String
    ): Equipment

    editEquipment(
      id: String,
      used_by: String,
      count: Int,
      new_or_used: String    
    ): Equipment

    deleteEquipment(id: String): Equipment
  }
  
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }

  type Supply {
    id: String
    team: Int
  }
`
const resolvers = {
  Query: {
    teams: () => database.teams.map((team) => {
        team.supplies = database.supplies
          .filter((supply) => supply.team === team.id);
        return team;
    }),
    team: (parent, args, context, info) => database.teams
      .filter(team => team.id === args.id)[0],
    equiments: () => database.equipments,
    suppies: () => database.supplies,
  },
  Mutation: {
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args)
      return args;
    },
    editEquipment: (parent, args, context, info) => {
      return database.equipments
        .filter(equipment => equipment.id === args.id)
        .map((equipment) => {
          Object.assign(equipment, args);
          return equipment;
        })[0]
    },
    deleteEquipment: (parent, args, context, info) => {
      const deleted = database.equipments
        .filter((equipment) => equipment.id === args.id)[0];
      database.equipments = database.equipments
        .filter((equipment) => equipment.id !== args.id);
      return deleted;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})
