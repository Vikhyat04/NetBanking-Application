module.exports = (sequelize, Sequelize) => {
    const userDetails1 = sequelize.define(
      "userDetails1",
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: "user_id",
          autoIncrement: true
        },
        userName: {
          type: Sequelize.STRING,
          field: "user_name",
          allowNull: false
  
        },
        userEmail: {
            type: Sequelize.STRING,
            field: "user_email",
            allowNull: false
    
          },
          userPassword: {
            type: Sequelize.STRING,
            field: "user_password",
            allowNull: false
    
          },
          countrycode: {
            type: Sequelize.STRING,
            field: "country_code",
            allowNull: false
    
          },
          phoneno: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: "phone_number",
          },
        createdAt: {
            type: Sequelize.DATE,
            field: "created_date"
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "modified_date"
          },
          createdBy: {
            type: Sequelize.STRING,
            field: "created_by"
          },
          updatedBy: {
            type: Sequelize.STRING,
            field: "modified_by"
          },
      },
      {
        tableName: "user_details"
      }
    );
  
    return userDetails1;
  };
  