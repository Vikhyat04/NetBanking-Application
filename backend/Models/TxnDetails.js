module.exports = (sequelize, Sequelize) => {
    const txnDetails = sequelize.define(
      "txnDetails",
      {
        userTxnId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: "txn_id",
          autoIncrement: true
        },
        userToEmail: {
            type: Sequelize.STRING,
            field: "to_user_email",
            allowNull: false
    
          },
          userFromEmail: {
            type: Sequelize.STRING,
            field: "from_user_email",
            allowNull: false
    
          },
          AmountT: {
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
        tableName: "txn_details"
      }
    );
  
    return txnDetails;
  };
  