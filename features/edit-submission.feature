Feature: Edit submission

    Background: Logging in
        Given I have a Cytora account
        And I am logged in

    Scenario Outline: Edit submission appetite to <new_appetite>
        Given I have an active submission <appetite>
        And I allocate the submission to myself
        When I edit the submission to <new_appetite>
        Then the submission isInAppetite is changed to <boolean>
        Then I am able to logout

        Examples:
            | appetite        | new_appetite    | boolean |
            | out_of_appetite | in_appetite     | true    |
            | in_appetite     | out_of_appetite | false   |