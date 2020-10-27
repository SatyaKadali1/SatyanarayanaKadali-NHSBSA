$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testcase.feature");
formatter.feature({
  "line": 2,
  "name": "NHS Costs checker End to End journey",
  "description": "\r\n\tAs a person from Wales\r\n\tI need to know what help I can get with my NHS costs\r\n\tSo that I can get the treatment I need",
  "id": "nhs-costs-checker-end-to-end-journey",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.before({
  "duration": 6872635600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "I navigate to NHS Costs checker tool",
  "keyword": "Given "
});
formatter.match({
  "location": "EndToEndJourney.i_navigate_to_NHS_Costs_checker_tool()"
});
formatter.result({
  "duration": 1894118500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Wales Test Ticket - Acceptance Criteria",
  "description": "",
  "id": "nhs-costs-checker-end-to-end-journey;wales-test-ticket---acceptance-criteria",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I put my circumstances into the Checker tool",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "EndToEndJourney.i_am_a_person_from_Wales()"
});
formatter.result({
  "duration": 1146720800,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndJourney.i_put_my_circumstances_into_the_Checker_tool()"
});
formatter.result({
  "duration": 7658290700,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndJourney.i_should_get_a_result_of_whether_I_will_get_help_or_not()"
});
formatter.result({
  "duration": 57097500,
  "status": "passed"
});
formatter.after({
  "duration": 932667100,
  "status": "passed"
});
});