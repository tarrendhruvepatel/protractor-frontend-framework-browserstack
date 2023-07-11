Feature: Action submission

    Background: Logging in
        Given I have a Cytora account
        And I am logged in

    Scenario Outline: Action submission as <action>
        Given I have an active submission <appetite>
        And I allocate the submission to myself
        When I action the submission as <action>
        Then the submission stage is changed to <action>
        Then I am able to logout

        Examples:
            | appetite    | action   |
            | in_appetite | declined |
            | in_appetite | referred |
            | in_appetite | bound    |
            | in_appetite | lost     |