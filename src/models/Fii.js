import mongoose from "mongoose";

const FiiSchema = new mongoose.Schema(
  {
    /**
      "Ticker": "SRVD11",
      "Name": "Serra Verde",
      "Administrator": "Vórtx DTVM LTDA",
      "DividendYield": "2,57%",
      "LastYield": "R$0,20",
      "Equity": "R$71,73 M",
      "PatrimonialValuePerQuota": "R$0,75",
      "CurrentQuota": "7,79",
      "Min52weeks": "7,00",
      "Max52weeks": "10,00",
      "Valorization12months": "19,11",
      "TypeOfFII": "Indefinido",
      "TypeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
      "DateOnCVM": "--/--/--",
      "NumberOfQuota": "96.286.021",
      "NumberOfQuotaHolders": "92"
      "lastRevenuesTable": [
        {
          "DataBase": "08.09.2021",
          "DatePayment": "15.09.2021",
          "BaseQuotation": "R$ 120,00",
          "DY": "12,09 %",
          "Dividend": "R$ 14,504"
        },
     */
    
    Ticker: { type: String, unique: true, required: true },
    Name: { type: String },
    Administrator: { type: String },
    DividendYield: { type: String, required: true },
    LastYield: { type: String, required: true },
    Equity: { type: String, required: true },
    PatrimonialValuePerQuota: { type: String, required: true },
    CurrentQuota: { type: String },
    Min52weeks: { type: String },
    Max52weeks: { type: String },
    Valorization12months: { type: String },
    TypeOfFII: { type: String },
    TypeOfANBIMA: { type: String },
    DateOnCVM: { type: String },
    NumberOfQuota: { type: String },
    NumberOfQuotaHolders: { type: String },
    lastRevenuesTable: {
      DataBase: String, 
      DatePayment:  String, 
      BaseQuotation:  String, 
      DY: String, 
      Dividend: String, 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Fii", FiiSchema);
