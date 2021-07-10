module.exports = (sequelize, Sequelize) => {
    const sample_1 = sequelize.define(
      "sample_1",
      {
        id: {
          type: Sequelize.Integer,
          primaryKey: true,
          allowNull: false,
          field: "id",
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          field: "name",
          allowNull: false
  
        },
        createdAt: {
            type: Sequelize.DATE,
            field: "created_data"
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "modified_date"
          },
      },
      {
        tableName: "sample_1"
      }
    );
  
    return sample_1;
  };
  