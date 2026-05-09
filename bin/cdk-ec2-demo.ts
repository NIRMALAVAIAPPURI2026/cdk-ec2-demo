const app = new cdk.App();
new CdkEc2DemoStack(app, 'CdkEc2DemoStack', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  },
});
