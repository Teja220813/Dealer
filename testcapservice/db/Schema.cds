namespace Referencedata;

type category : String enum {
    functional;System;
}



entity LovType {
    key Id          : UUID;
        Active      : Boolean;
        Name        : String(100);
        Description : String(100);
        Category    : category ;
        LovValue : Association to many LovValue on LovValue.Id =$self.Id;
}
 
 entity LovValue {
    key Id  :UUID;
     Isocode : String(100);
     Active : Boolean;
     Description :String(100);
     SystemId : Integer;
    Datatype : String(100);
    LovType :Association  to LovValue;

    
 }