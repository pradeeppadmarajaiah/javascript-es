/**
 *  Return Token to FiberProducer from Spinner
 * @param {org.example.basic.ReturnTokenToFiberProducerFromSpinner} tx The Return Token to FiberProducer.
 * @transaction
 */
async function returnTokenToFiberProducerFromSpinner(tx) {

  let factory = getFactory();

  let token = tx.token;
  let spinner = tx.spinner;
  let fiberProducer = tx.producer;
  let returnTokenQuantity = tx.NumberOfTokens;

  //Get the spinner tokens
  let spinnerTokens = spinner.tokens;

  //Fetch the required tokens and subtract token count from outstandingTokenBalance and totalTokenAssigned.
  spinnerTokens.forEach(value => {
    if (value.token.getIdentifier() == token.getIdentifier()) {
      value.outstandingTokenBalance = value.outstandingTokenBalance - returnTokenQuantity;
      value.totalTokenAssigned = value.totalTokenAssigned - returnTokenQuantity;
    }
  });

  //Fetch and update Spinner registry
  let spinnerRegistry = await getParticipantRegistry('org.example.basic.Spinner');
  await spinnerRegistry.update(spinner);


  //Get the fiber producer tokens
  let fiberProducerTokens = fiberProducer.tokens;
  fiberProducerTokens.forEach(value => {
    if (value.token.getIdentifier() == token.getIdentifier()) {
      value.outstandingTokenBalance = value.outstandingTokenBalance + returnTokenQuantity;
    }
  });

  //Fetch and update Fiber Producer registry
  let producerRegistry = await getParticipantRegistry('org.example.basic.FiberProducer');
  await producerRegistry.update(fiberProducer);

}
