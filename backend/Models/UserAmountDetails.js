module.exports = (sequelize, Sequelize) => {
    const userAmountDetails = sequelize.define(
      "userAmountDetails",
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: "user_id"
         
        },
        userEmail: {
            type: Sequelize.STRING,
            field: "user_email",
            allowNull: false
    
          },
          Amount: {
            type: Sequelize.FLOAT,
            allowNull: false,
            field: "amount",
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
        tableName: "user_amount_details"
      }
    );
  
    return userAmountDetails;
  };
  