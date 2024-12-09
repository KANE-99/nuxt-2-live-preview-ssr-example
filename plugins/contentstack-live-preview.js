import LivePreview from '@contentstack/live-preview-utils';

export default ({ app }, inject) => {
  console.log('Initializing Contentstack Live Preview');
  // Initialize Contentstack Live Preview
  LivePreview.init({
    ssr: true
  });

  // Expose LivePreview to the app
  // inject('livePreview', LivePreview);
};