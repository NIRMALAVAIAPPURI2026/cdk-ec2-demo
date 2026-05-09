import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class CdkEc2DemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Simple VPC without NAT Gateway
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      natGateways: 0,
    });

    // EC2 Instance
    const instance = new ec2.Instance(this, 'MyInstance', {
      vpc,
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
    });

    // Allow SSH
    instance.connections.allowFromAnyIpv4(
      ec2.Port.tcp(22),
      'SSH Access'
    );
  }
}
