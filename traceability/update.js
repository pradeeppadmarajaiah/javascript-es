/**
 * Create Token.
 * @param {org.example.basic.createToken} tx The Create Token transaction instance.
 * @transaction
 */
async function createToken(tx) {

  // Get the factory.
  let factory = getFactory();

  //NameSpace
  const NS = 'org.example.basic';

  let totalQuantityCreated = tx.token.totalQuantityCreated;
  let token = factory.newResource(NS, 'Token', tx.token.tokenId);

  token.tokenOwner = tx.token.tokenOwner;
  token.totalQuantityCreated = totalQuantityCreated;
  token.outstandingTokenBalance = totalQuantityCreated;

  let tokenRegistry = await getAssetRegistry('org.example.basic.Token');
  await tokenRegistry.add(token);

  let tokenRelation = factory.newConcept('org.example.basic', 'TokenRelationship');
  tokenRelation.token = tx.token;
  tokenRelation.dateCommitted = tx.dateCommitted;
  tokenRelation.totalTokenAssigned = totalQuantityCreated;
  tokenRelation.outstandingTokenBalance = totalQuantityCreated;
  if (token.tokenOwner.tokens == null) {
    token.tokenOwner.tokens = [];

  }


  let tokenTrace = factory.newConcept('org.example.basic', 'Tracebility');
  tokenTrace.transferLevel = "FIBER_PRODUCER";
  tokenTrace.owner = token.tokenOwner;
  tokenRelation.traces = [tokenTrace];

  token.tokenOwner.tokens = token.tokenOwner.tokens.concat(tokenRelation);
  let producerRegistry = await getParticipantRegistry('org.example.basic.FiberProducer');
  await producerRegistry.update(token.tokenOwner);

}

/**
 * Assign Token to Spinner.
 * @param {org.example.basic.AssignTokenFromFiberProducerToSpinner} tx The Assign Token to Spinner.
 * @transaction
 */
async function assignTokenFromFiberProducerToSpinner(tx) {

  let factory = getFactory();

  let totalQuantityAssigned = tx.NumberOfTokens;
  let fiberProducer = tx.producer;
  let spinner = tx.spinner;
  let token = tx.token;
  let tokenRelation = null;
  let isTokenRelationExists = false;



  if (spinner.tokens != null) {
    let spinnerTokens = spinner.tokens;
    spinnerTokens.forEach(value => {
      if (value.token.getIdentifier() == token.getIdentifier()) {
        tokenRelation = value;
        isTokenRelationExists = true;
      } else {
        tokenRelation = factory.newConcept('org.example.basic', 'TokenRelationship');
        tokenRelation.token = token;
        tokenRelation.dateCommitted = tx.dateCommitted;
        tokenRelation.totalTokenAssigned = 0;
        tokenRelation.outstandingTokenBalance = 0;
      }
    });
  } else {
    spinner.tokens = [];
    tokenRelation = factory.newConcept('org.example.basic', 'TokenRelationship');
    tokenRelation.token = token;
    tokenRelation.dateCommitted = tx.dateCommitted;
    tokenRelation.totalTokenAssigned = 0;
    tokenRelation.outstandingTokenBalance = 0;
  }

  let producerRegistry = await getParticipantRegistry('org.example.basic.FiberProducer');
  let producerTokens = fiberProducer.tokens;
  producerTokens.forEach(value => {
    if (value.token.getIdentifier() == token.getIdentifier()) {
      value.outstandingTokenBalance = value.outstandingTokenBalance - totalQuantityAssigned;
      token.outstandingTokenBalance = value.outstandingTokenBalance;
      tokenRelation.traces = value.traces;
    }
  });
  await producerRegistry.update(fiberProducer);

  let tokenRegistry = await getAssetRegistry('org.example.basic.Token');
  await tokenRegistry.update(token);

  tokenRelation.totalTokenAssigned = tokenRelation.totalTokenAssigned + totalQuantityAssigned;
  tokenRelation.outstandingTokenBalance = tokenRelation.outstandingTokenBalance + totalQuantityAssigned;

  //alert("test1")

  let tokenTrace = factory.newConcept('org.example.basic', 'Tracebility');
  tokenTrace.transferLevel = "SPINNER";
  tokenTrace.owner = tx.spinner;
  if (!isTokenRelationExists) {
    if (tokenRelation.traces != null) {
      tokenRelation.traces = tokenRelation.traces.concat(tokenTrace);
    } else {
      tokenRelation.traces = [tokenTrace]
    }
    if (spinner.tokens != null) {
      spinner.tokens = spinner.tokens.concat(tokenRelation);
    } else {
      spinner.tokens = [tokenRelation];
    }
  }


  let spinnerRegistry = await getParticipantRegistry('org.example.basic.Spinner');
  await spinnerRegistry.update(spinner);

}

/**
 * Assign Token From Spinner to Fabric Mill.
 * @param {org.example.basic.AssignTokenFromSpinnerToFabricMill} tx The Assign Token to Fabric Mill.
 * @transaction
 */
async function AssignTokenFromSpinnerToFabricMill(tx) {

  let factory = getFactory();

  let totalQuantityAssigned = tx.NumberOfTokens;
  let spinner = tx.spinner;
  let fabricMill = tx.fabricMill;
  let token = tx.token;
  let tokenRelation = factory.newConcept('org.example.basic', 'TokenRelationship');

  let spinnerRegistry = await getParticipantRegistry('org.example.basic.Spinner');
  let spinnerTokens = spinner.tokens;
  spinnerTokens.forEach(value => {
    if (value.token.getIdentifier() == token.getIdentifier()) {
      value.outstandingTokenBalance = value.outstandingTokenBalance - totalQuantityAssigned;
      tokenRelation.traces = value.traces;
    }
  });
  await spinnerRegistry.update(spinner);


  tokenRelation.token = token;
  tokenRelation.dateCommitted = tx.dateCommitted;
  tokenRelation.totalTokenAssigned = totalQuantityAssigned;
  tokenRelation.outstandingTokenBalance = totalQuantityAssigned;
  if (fabricMill.tokens == null) {
    fabricMill.tokens = [];
  }

  let tokenTrace = factory.newConcept('org.example.basic', 'Tracebility');
  tokenTrace.transferLevel = "FABRIC_MILL";
  tokenTrace.owner = tx.fabricMill;
  tokenRelation.traces = tokenRelation.traces.concat(tokenTrace);

  fabricMill.tokens = fabricMill.tokens.concat(tokenRelation);
  let garmentRegistry = await getParticipantRegistry('org.example.basic.FabricMill');
  await garmentRegistry.update(fabricMill);

}




/**
 * Assign Token from Fabric Mill to Garment.
 * @param {org.example.basic.AssignTokenFromFabricMillToGarment} tx The Assign Token to Garment.
 * @transaction
 */
async function AssignTokenFromFabricMillToGarment(tx) {

  let factory = getFactory();

  let totalQuantityAssigned = tx.NumberOfTokens;
  let fabricMill = tx.fabricMill;
  let garment = tx.garment;
  let token = tx.token;
  let tokenRelation = factory.newConcept('org.example.basic', 'TokenRelationship');

  let fabricMillRegistry = await getParticipantRegistry('org.example.basic.FabricMill');
  let fabricMillTokens = fabricMill.tokens;
  fabricMillTokens.forEach(value => {
    if (value.token.getIdentifier() == token.getIdentifier()) {
      value.outstandingTokenBalance = value.outstandingTokenBalance - totalQuantityAssigned;
      tokenRelation.traces = value.traces;
    }
  });
  await fabricMillRegistry.update(fabricMill);


  tokenRelation.token = token;
  tokenRelation.dateCommitted = tx.dateCommitted;
  tokenRelation.totalTokenAssigned = totalQuantityAssigned;
  tokenRelation.outstandingTokenBalance = totalQuantityAssigned;
  if (garment.tokens == null) {
    garment.tokens = [];
  }

  let tokenTrace = factory.newConcept('org.example.basic', 'Tracebility');
  tokenTrace.transferLevel = "GARMENT";
  tokenTrace.owner = tx.garment;
  tokenRelation.traces = tokenRelation.traces.concat(tokenTrace);

  garment.tokens = garment.tokens.concat(tokenRelation);
  let garmentRegistry = await getParticipantRegistry('org.example.basic.Garment');
  await garmentRegistry.update(garment);

}

/**
 * Assign Token From Garment to Brand.
 * @param {org.example.basic.AssignTokenFromGarmentToBrand} tx The Assign Token to Brand.
 * @transaction
 */
async function AssignTokenFromGarmentToBrand(tx) {

  let factory = getFactory();

  let totalQuantityAssigned = tx.NumberOfTokens;
  let garment = tx.garment;
  let brand = tx.brand;
  let token = tx.token;
  let tokenRelation = factory.newConcept('org.example.basic', 'TokenRelationship');

  let garmentRegistry = await getParticipantRegistry('org.example.basic.Garment');
  let garmentTokens = garment.tokens;
  garmentTokens.forEach(value => {
    if (value.token.getIdentifier() == token.getIdentifier()) {
      value.outstandingTokenBalance = value.outstandingTokenBalance - totalQuantityAssigned;
      tokenRelation.traces = value.traces;
    }
  });
  await garmentRegistry.update(garment);


  tokenRelation.token = token;
  tokenRelation.dateCommitted = tx.dateCommitted;
  tokenRelation.totalTokenAssigned = totalQuantityAssigned;
  tokenRelation.outstandingTokenBalance = totalQuantityAssigned;
  if (brand.tokens == null) {
    brand.tokens = [];
  }

  let tokenTrace = factory.newConcept('org.example.basic', 'Tracebility');
  tokenTrace.transferLevel = "BRAND";
  tokenTrace.owner = tx.brand;
  tokenRelation.traces = tokenRelation.traces.concat(tokenTrace);

  brand.tokens = brand.tokens.concat(tokenRelation);
  let brandRegistry = await getParticipantRegistry('org.example.basic.Brand');
  await brandRegistry.update(brand);

}
