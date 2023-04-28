using Referencedata from '../db/schema';


service projectservice {
   entity LovType as projection on Referencedata.LovType;

   entity LovValue as projection on Referencedata.LovValue;
}
