Feature: Create submission

    Background: Logging in
        Given I have a Cytora account
        And I am logged in

    Scenario Outline: Create new <submission_type> submission
        When I click add submission
        And I search for a <submission_type>
        And I complete all the form details required
        Then I am able to create the <submission_type> submission
        Given I allocate the submission to myself
        Then I am able to view the <submission_type> submission information
        Then I am able to logout

        Examples:
            | submission_type |
            | company         |
            | property        |