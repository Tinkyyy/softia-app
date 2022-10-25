import Agreement from '../database/models/agreement-model';

async function getAgreements() {
  let agreementsArray: Agreement[] = [];

  await Agreement.findAll()
    .then((agreements: Agreement[]) => {
      agreementsArray = agreements;
    });

  return agreementsArray;
}

export default getAgreements;
