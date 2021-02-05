
class CardDetails {
  constructor(id, dameId, sireId, dateOfLambing, dateOfMating, sex, birthWeight, remarks) {
    this.id = id;
    this.dameId = dameId;
    this.sireId = sireId;
    this.dateOfMating = dateOfMating;
    this.dateOfLambing = dateOfLambing;
    this.sex = sex;
    this.birthWeight = birthWeight;
    this.remarks = remarks;
  }

  toJSON() {
    return {
      id: this.id,
      dameId: this.dameId,
      sireId: this.sireId,
      dateOfMating: this.dateOfMating,
      dateOfLambing: this.dateOfLambing,
      sex: this.sex,
      birthWeight: this.birthWeight,
      remarks: this.remarks
    };
  }
}


export default CardDetails;