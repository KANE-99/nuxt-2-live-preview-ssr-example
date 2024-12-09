import contentstack, { QueryOperation } from '@contentstack/delivery-sdk'

const stack = contentstack.stack({
    // Replace this variables with actual values or from environment variables
    apiKey: CONTENTSTACK_API_KEY,
    deliveryToken: CONTENTSTACK_DELIVERY_TOKEN,
    environment: CONTENTSTACK_ENVIRONMENT,
    host: "eu-cdn.contentstack.com",
    live_preview: {
        host: "eu-rest-preview.contentstack.com",
        enable: true,
        preview_token: CONTENTSTACK_PREVIEW_TOKEN
    }
});

const getEntryByUrl = async (url) => {
    const query = stack.contentType('page').entry().query().where("url", QueryOperation.EQUALS, url);
    const result = await query.find();
    return result.entries[0];
}

export default async function ({ app }, inject) {
    inject('getEntry', getEntryByUrl);
    inject('stack', stack);
}