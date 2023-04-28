sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lovtype/test/integration/FirstJourney',
		'lovtype/test/integration/pages/LovTypeList',
		'lovtype/test/integration/pages/LovTypeObjectPage',
		'lovtype/test/integration/pages/LovValueObjectPage'
    ],
    function(JourneyRunner, opaJourney, LovTypeList, LovTypeObjectPage, LovValueObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lovtype') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLovTypeList: LovTypeList,
					onTheLovTypeObjectPage: LovTypeObjectPage,
					onTheLovValueObjectPage: LovValueObjectPage
                }
            },
            opaJourney.run
        );
    }
);