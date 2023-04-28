using projectservice as service from '../../srv/Project-service';

annotate service.LovValue with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Id',
            Value : Id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Isocode',
            Value : Isocode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Active',
            Value : Active,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Description',
            Value : Description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SystemId',
            Value : SystemId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Datatype',
            Value : Datatype,
        },
        {
                $Type : 'UI.DataField',
                Label : 'LovType_Id',
                Value : LovType_Id,
            },
    ]
);
annotate service.LovValue with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Id',
                Value : Id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Isocode',
                Value : Isocode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Active',
                Value : Active,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Description',
                Value : Description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SystemId',
                Value : SystemId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Datatype',
                Value : Datatype,
            },
            {
                $Type : 'UI.DataField',
                Label : 'LovType_Id',
                Value : LovType_Id,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
