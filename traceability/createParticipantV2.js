let input = {
  "$class": "org.tg.user.CreateParticipant",
  "roles": [
    "FiberProducer",
    "FiberProducerTrader",
    "Spinner",
    "SpinnerTrader",
    "FabricMill",
    "FabricMillTrader",
    "Garment",
    "GarmentTrader",
    "Brand"
  ],
  "userId": "supima",
  "companyName": "Supima Textile Pvt Ltd"
}

let userId = "pallava";
let companyName = "Pallava Textiles (P) Limited";

/**
 * Create Participant.
 * @param {org.tg.user.CreateParticipant} tx Create Company as a Participant transaction instance.
 * @transaction
 */
async function createParticipant(tx) {
  const NS = 'org.tg.user';

  let roles = tx.roles;
  let companyId = tx.userId;
  let companyName = tx.companyName;

  for (role in roles) {
    let roleValue = roles[role];
    let participant = getFactory().newResource(NS, roleValue, companyId);
    participant.companyName = companyName;
    let participantRegistry = await getParticipantRegistry(NS + `.${roleValue}`);
    await participantRegistry.add(participant);
    console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
  }

}
