#!/bin/bash
cd /opt/
failed=0
export ENV="dev"

# export FEATURE="/opt/features/create-view-submission.feature"
# if ! npm test;
# then
#     failed=$((failed+1))
# fi

# sleep 30

# export FEATURE="/opt/features/edit-submission.feature"
# if ! npm test;
# then
#     failed=$((failed+1))
# fi

# sleep 30

# export FEATURE="/opt/features/action-submission.feature"
# if ! npm test;
# then
#     failed=$((failed+1))
# fi

echo "number of failed test runs: $failed"
exit $failed;