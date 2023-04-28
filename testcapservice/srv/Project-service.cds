using Referencedata from '../db/Schema';


service projectservice {
   entity LovType @(odata.draft.enabled: true)as projection on Referencedata.LovType;

   entity LovValue @(odata.draft.enabled: true)as projection on Referencedata.LovValue;
}
