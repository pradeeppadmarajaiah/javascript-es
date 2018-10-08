/**
 * Create Token.
 * @param {org.tg.user.CreateParticipant} tx The Create Participant transaction instance.
 * @transaction
 */
async function createParticipant(tx) {

  let roles = tx.roles;
  let companyId = tx.userId;
  let companyName = tx.companyName;

  const factory = getFactory();
  const NS = 'org.tg.user';

  for (role in roles) {
    let roleValue = roles[role];

    switch (roleValue) {
      case "FIBER_PRODUCER":
        let fiberProducer = factory.newResource(NS, 'FiberProducer', companyId);
        fiberProducer.companyName = companyName;
        let fiberProducerRegistry = await getParticipantRegistry(NS + '.FiberProducer');
        await fiberProducerRegistry.add(fiberProducer);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "FIBER_PRODUCER_TRADER":
        let fiberProducerTrader = factory.newResource(NS, 'FiberProducerTrader', companyId);
        fiberProducerTrader.companyName = companyName;
        let fiberProducerTraderRegistry = await getParticipantRegistry(NS + '.FiberProducerTrader');
        await fiberProducerTraderRegistry.add(fiberProducerTrader);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "SPINNER":
        let spinner = factory.newResource(NS, 'Spinner', companyId);
        spinner.companyName = companyName;
        let spinnerRegistry = await getParticipantRegistry(NS + '.Spinner');
        await spinnerRegistry.add(spinner);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "SPINNER_TRADER":
        let spinnerTrader = factory.newResource(NS, 'SpinnerTrader', companyId);
        spinnerTrader.companyName = companyName;
        let spinnerTraderRegistry = await getParticipantRegistry(NS + '.SpinnerTrader');
        await spinnerTraderRegistry.add(spinnerTrader);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "FABRIC_MILL":
        let fabricMill = factory.newResource(NS, 'FabricMill', companyId);
        fabricMill.companyName = companyName;
        let fabricMillRegistry = await getParticipantRegistry(NS + '.FabricMill');
        await fabricMillRegistry.add(fabricMill);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "FABRIC_MILL_TRADER":
        let fabricMillTrader = factory.newResource(NS, 'FabricMillTrader', companyId);
        fabricMillTrader.companyName = companyName;
        let fabricMillTraderRegistry = await getParticipantRegistry(NS + '.FabricMillTrader');
        await fabricMillTraderRegistry.add(fabricMillTrader);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "GARMENT":
        let garment = factory.newResource(NS, 'Garment', companyId);
        garment.companyName = companyName;
        let garmentRegistry = await getParticipantRegistry(NS + '.Garment');
        await garmentRegistry.add(garment);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "GARMENT_TRADER":
        let garmentTrader = factory.newResource(NS, 'GarmentTrader', companyId);
        garmentTrader.companyName = companyName;
        let garmentTraderRegistry = await getParticipantRegistry(NS + '.GarmentTrader');
        await garmentTraderRegistry.add(garmentTrader);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      case "BRAND":
        let brand = factory.newResource(NS, 'Brand', companyId);
        brand.companyName = companyName;
        let brandRegistry = await getParticipantRegistry(NS + '.Brand');
        await brandRegistry.add(brand);
        console.log(`Participant ${companyName} with role ${roleValue} created successfully.`);
        break;
      default:
        break;
    }

  }
}
