sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lovvalue/test/integration/FirstJourney',
		'lovvalue/test/integration/pages/LovValueList',
		'lovvalue/test/integration/pages/LovValueObjectPage'
    ],
    function(JourneyRunner, opaJourney, LovValueList, LovValueObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lovvalue') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLovValueList: LovValueList,
					onTheLovValueObjectPage: LovValueObjectPage
                }
            },
            opaJourney.run
        );
    }
);