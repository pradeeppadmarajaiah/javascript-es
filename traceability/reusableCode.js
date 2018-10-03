async function updateParticipant(isTokenRelationExists,tokenRelation,spinner,totalQuantityAssigned,factory,tx) {
  tokenRelation.totalTokenAssigned = tokenRelation.totalTokenAssigned + totalQuantityAssigned;
  tokenRelation.outstandingTokenBalance = tokenRelation.outstandingTokenBalance + totalQuantityAssigned;

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
