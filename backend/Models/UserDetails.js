module.exports = (sequelize, Sequelize) => {
    const user_details = sequelize.define(
      "userDetails",
      {
        id: {
          type: Sequelize.Integer,
          primaryKey: true,
          allowNull: false,
          field: "id",
          autoIncrement: true
        },
        username: {
          type: Sequelize.STRING,
          field: "username",
          allowNull: false
  
        },
        email: {
            type: Sequelize.STRING,
            field: "email",
            allowNull: false
    
          },
          password: {
            type: Sequelize.STRING,
            field: "password",
            allowNull: false
    
          },
          countrycode: {
            type: Sequelize.STRING,
            field: "countrycode",
            allowNull: false
    
          },
          phoneno: {
            type: Sequelize.Integer,
            allowNull: false,
            field: "PhoneNo",
          },
        createdAt: {
            type: Sequelize.DATE,
            field: "created_date"
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "modified_date"
          },
      },
      {
        tableName: "user_details"
      }
    );
  
    return user_details;
  };
  