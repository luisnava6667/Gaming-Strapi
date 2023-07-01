module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
        secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
        region: 'eu-west-1', // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: 'e-commerce-strapi-game'
        }
      }
    }
  }
})
