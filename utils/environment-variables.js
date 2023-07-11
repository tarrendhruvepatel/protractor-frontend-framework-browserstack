function auth() {
    return {
        uwp1Email: process.env.UWP1_EMAIL,
        uwp1Password: process.env.UWP1_PASSWORD
    };
};

function urls(env) {
    envName = {
        dev: "dev",
        prod: "prod"
    }[env]

    uwpEnvName = {
        dev: "-dev",
        prod: ""
    }[env]

    authEnvName = {
        dev: "cytora-dev.eu.auth0",
        prod: "auth.cytora"
    }[env]

    return {
        showhomeUrl: `https://showhome.cytora-${envName}.com`,
        cytoraSignUp: `https://accounts.cytora-${envName}.com/sign-up`,
        cytoraSignIn: `https://accounts.cytora-${envName}.com/sign-in`,
        cytoraGetStarted: `https://console.cytora-${envName}.com/get-started`,
        uwp: `https://uwp.cytora${uwpEnvName}.com/login`,
        authToken: `https://${authEnvName}.com/oauth/token`,
        getSubmissionById: `https://gateway.cytora-${envName}.com/v1/underwriting/submissions?`,
        internaluwp: `https://uwp-submissions.cytora-${envName}.com/v1/submissions/`,
    };
};

function data(env) {
    envName = {
        dev: "5eff13b0533ef00019cc4c2b",
        prod: "5f16fe989f68f00013609d0f"
    }[env]

    return {
        userId: `auth0|${envName}`,
        userIdForQuery: `auth0%7C${envName}`,
    };
};

function cp_auth(env) {
    envName = {
        dev: process.env.DEV_API_KEY,
        prod: process.env.PROD_API_KEY
    }[env]

    return {
        cpAuth: `${envName}`
    };
};

function delete_key(env) {
    envName = {
        dev: process.env.DEV_DELETE_KEY,
        prod: process.env.PROD_DELETE_KEY
    }[env]

    return {
        delete_key: `${envName}`
    };
};

module.exports = {
    urls,
    auth,
    data,
    cp_auth,
    delete_key
};