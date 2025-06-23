

# CertificateManagerSettingsConfig

AWS Certificate Manager settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**certificateStatuses** | [**List&lt;CertificateStatusesEnum&gt;**](#List&lt;CertificateStatusesEnum&gt;) | Filter the certificate list by status value. |  [optional] |
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**extendedKeyUsage** | [**List&lt;ExtendedKeyUsageEnum&gt;**](#List&lt;ExtendedKeyUsageEnum&gt;) | The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key is used. This is in addition or in place of Key Usage. |  [optional] |
|**keyTypes** | [**List&lt;KeyTypesEnum&gt;**](#List&lt;KeyTypesEnum&gt;) | Specify one or more algorithms that is used to generate key pairs.\\n\\n |  [optional] |
|**keyUsage** | [**List&lt;KeyUsageEnum&gt;**](#List&lt;KeyUsageEnum&gt;) | The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate. |  [optional] |
|**managedBy** | [**ManagedByEnum**](#ManagedByEnum) | Identifies the AWS service that manages the certificate issued by ACM. |  [optional] |
|**regions** | [**List&lt;RegionsEnum&gt;**](#List&lt;RegionsEnum&gt;) |  |  [optional] |
|**roleArn** | **String** | The ARN of the role to assume to access the bucket |  [optional] |



## Enum: List&lt;CertificateStatusesEnum&gt;

| Name | Value |
|---- | -----|
| PENDING_VALIDATION | &quot;PENDING_VALIDATION&quot; |
| ISSUED | &quot;ISSUED&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| VALIDATION_TIMED_OUT | &quot;VALIDATION_TIMED_OUT&quot; |
| REVOKED | &quot;REVOKED&quot; |
| FAILED | &quot;FAILED&quot; |



## Enum: List&lt;ExtendedKeyUsageEnum&gt;

| Name | Value |
|---- | -----|
| TLS_WEB_SERVER_AUTHENTICATION | &quot;TLS_WEB_SERVER_AUTHENTICATION&quot; |
| TLS_WEB_CLIENT_AUTHENTICATION | &quot;TLS_WEB_CLIENT_AUTHENTICATION&quot; |
| CODE_SIGNING | &quot;CODE_SIGNING&quot; |
| EMAIL_PROTECTION | &quot;EMAIL_PROTECTION&quot; |
| TIME_STAMPING | &quot;TIME_STAMPING&quot; |
| OCSP_SIGNING | &quot;OCSP_SIGNING&quot; |
| IPSEC_END_SYSTEM | &quot;IPSEC_END_SYSTEM&quot; |
| IPSEC_TUNNEL | &quot;IPSEC_TUNNEL&quot; |
| IPSEC_USER | &quot;IPSEC_USER&quot; |
| ANY | &quot;ANY&quot; |
| NONE | &quot;NONE&quot; |
| CUSTOM | &quot;CUSTOM&quot; |



## Enum: List&lt;KeyTypesEnum&gt;

| Name | Value |
|---- | -----|
| RSA_1024 | &quot;RSA_1024&quot; |
| RSA_2048 | &quot;RSA_2048&quot; |
| RSA_3072 | &quot;RSA_3072&quot; |
| RSA_4096 | &quot;RSA_4096&quot; |
| EC_PRIME256V1 | &quot;EC_prime256v1&quot; |
| EC_SECP384R1 | &quot;EC_secp384r1&quot; |
| EC_SECP521R1 | &quot;EC_secp521r1&quot; |



## Enum: List&lt;KeyUsageEnum&gt;

| Name | Value |
|---- | -----|
| DIGITAL_SIGNATURE | &quot;DIGITAL_SIGNATURE&quot; |
| NON_REPUDIATION | &quot;NON_REPUDIATION&quot; |
| KEY_ENCIPHERMENT | &quot;KEY_ENCIPHERMENT&quot; |
| DATA_ENCIPHERMENT | &quot;DATA_ENCIPHERMENT&quot; |
| KEY_AGREEMENT | &quot;KEY_AGREEMENT&quot; |
| CERTIFICATE_SIGNING | &quot;CERTIFICATE_SIGNING&quot; |
| CRL_SIGNING | &quot;CRL_SIGNING&quot; |
| ENCIPHER_ONLY | &quot;ENCIPHER_ONLY&quot; |
| DECIPHER_ONLY | &quot;DECIPHER_ONLY&quot; |
| ANY | &quot;ANY&quot; |
| CUSTOM | &quot;CUSTOM&quot; |



## Enum: ManagedByEnum

| Name | Value |
|---- | -----|
| CLOUDFRONT | &quot;CLOUDFRONT&quot; |



## Enum: List&lt;RegionsEnum&gt;

| Name | Value |
|---- | -----|
| US_EAST_1 | &quot;us-east-1&quot; |
| US_EAST_2 | &quot;us-east-2&quot; |
| US_WEST_1 | &quot;us-west-1&quot; |
| US_WEST_2 | &quot;us-west-2&quot; |
| AF_SOUTH_1 | &quot;af-south-1&quot; |
| AP_EAST_1 | &quot;ap-east-1&quot; |
| AP_SOUTH_1 | &quot;ap-south-1&quot; |
| AP_NORTHEAST_1 | &quot;ap-northeast-1&quot; |
| AP_NORTHEAST_2 | &quot;ap-northeast-2&quot; |
| AP_NORTHEAST_3 | &quot;ap-northeast-3&quot; |
| AP_SOUTHEAST_1 | &quot;ap-southeast-1&quot; |
| AP_SOUTHEAST_2 | &quot;ap-southeast-2&quot; |
| CA_CENTRAL_1 | &quot;ca-central-1&quot; |
| CN_NORTH_1 | &quot;cn-north-1&quot; |
| CN_NORTHWEST_1 | &quot;cn-northwest-1&quot; |
| EU_CENTRAL_1 | &quot;eu-central-1&quot; |
| EU_WEST_1 | &quot;eu-west-1&quot; |
| EU_WEST_2 | &quot;eu-west-2&quot; |
| EU_WEST_3 | &quot;eu-west-3&quot; |
| EU_NORTH_1 | &quot;eu-north-1&quot; |
| EU_SOUTH_1 | &quot;eu-south-1&quot; |
| ME_SOUTH_1 | &quot;me-south-1&quot; |
| SA_EAST_1 | &quot;sa-east-1&quot; |
| US_GOV_EAST_1 | &quot;us-gov-east-1&quot; |
| US_GOV_WEST_1 | &quot;us-gov-west-1&quot; |



