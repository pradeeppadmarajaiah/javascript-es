/**
 *
 * @param {org.example.basic.testSetup} TestSetup - SetupDemo instance
 * @transaction
 */
async function setupDemo(setupDemo) { // eslint-disable-line no-unused-vars
  const factory = getFactory();
  const NS = 'org.example.basic';

  const fiberProducer = [
    factory.newResource(NS, 'FiberProducer', 'lenzing'),
    factory.newResource(NS, 'FiberProducer', 'supima')
  ];
  fiberProducer[0].companyName = "Lenzing";
  fiberProducer[1].companyName = "Supima";
  const fiberProducerRegistry = await getAssetRegistry(NS + '.FiberProducer');
  await fiberProducerRegistry.addAll(fiberProducer);

  const spinner = [
    factory.newResource(NS, 'Spinner', 'texhong	'),
    factory.newResource(NS, 'Spinner', 'pallava')
  ];

  spinner[0].companyName = "Texhong";
  spinner[1].companyName = "Pallava";
  const spinnerRegistry = await spinnergetAssetRegistry(NS + '.Spinner');
  await spinnerRegistry.addAll(spinner);

  const fabricMill = [
    factory.newResource(NS, 'FabricMill', 'advanceDenim'),
    factory.newResource(NS, 'FabricMill', 'candiani')
  ];
  fabricMill[0].companyName = "Advance Denim";
  fabricMill[1].companyName = "Candiani";
  const fabricMillRegistry = await getAssetRegistry(NS + '.FabricMill');
  await fabricMillRegistry.addAll(fabricMill);


  const garment = [
    factory.newResource(NS, 'Garment', 'advanceDenimGarment'),
    factory.newResource(NS, 'Garment', 'candianiGarment')
  ];
  garment[0].companyName = "Advance Denim Garment";
  garment[1].companyName = "Candiani Garment";
  const garmentRegistry = await getAssetRegistry(NS + '.Garment');
  await garmentRegistry.addAll(garment);

  const brand = [
    factory.newResource(NS, 'Brand', 'zara'),
    factory.newResource(NS, 'Brand', 'ellenFischer')
  ];
  brand[0].companyName = "Zara";
  brand[1].companyName = "Ellen Fischer";
  const brandRegistry = await getAssetRegistry(NS + '.Brand');
  await brandRegistry.addAll();

}
