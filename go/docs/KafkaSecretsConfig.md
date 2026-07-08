# KafkaSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaCertificate** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ClientCertificate** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ClientKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewKafkaSecretsConfig

`func NewKafkaSecretsConfig() *KafkaSecretsConfig`

NewKafkaSecretsConfig instantiates a new KafkaSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKafkaSecretsConfigWithDefaults

`func NewKafkaSecretsConfigWithDefaults() *KafkaSecretsConfig`

NewKafkaSecretsConfigWithDefaults instantiates a new KafkaSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCaCertificate

`func (o *KafkaSecretsConfig) GetCaCertificate() ModelsSecret`

GetCaCertificate returns the CaCertificate field if non-nil, zero value otherwise.

### GetCaCertificateOk

`func (o *KafkaSecretsConfig) GetCaCertificateOk() (*ModelsSecret, bool)`

GetCaCertificateOk returns a tuple with the CaCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaCertificate

`func (o *KafkaSecretsConfig) SetCaCertificate(v ModelsSecret)`

SetCaCertificate sets CaCertificate field to given value.

### HasCaCertificate

`func (o *KafkaSecretsConfig) HasCaCertificate() bool`

HasCaCertificate returns a boolean if a field has been set.

### GetClientCertificate

`func (o *KafkaSecretsConfig) GetClientCertificate() ModelsSecret`

GetClientCertificate returns the ClientCertificate field if non-nil, zero value otherwise.

### GetClientCertificateOk

`func (o *KafkaSecretsConfig) GetClientCertificateOk() (*ModelsSecret, bool)`

GetClientCertificateOk returns a tuple with the ClientCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientCertificate

`func (o *KafkaSecretsConfig) SetClientCertificate(v ModelsSecret)`

SetClientCertificate sets ClientCertificate field to given value.

### HasClientCertificate

`func (o *KafkaSecretsConfig) HasClientCertificate() bool`

HasClientCertificate returns a boolean if a field has been set.

### GetClientKey

`func (o *KafkaSecretsConfig) GetClientKey() ModelsSecret`

GetClientKey returns the ClientKey field if non-nil, zero value otherwise.

### GetClientKeyOk

`func (o *KafkaSecretsConfig) GetClientKeyOk() (*ModelsSecret, bool)`

GetClientKeyOk returns a tuple with the ClientKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientKey

`func (o *KafkaSecretsConfig) SetClientKey(v ModelsSecret)`

SetClientKey sets ClientKey field to given value.

### HasClientKey

`func (o *KafkaSecretsConfig) HasClientKey() bool`

HasClientKey returns a boolean if a field has been set.

### GetPassword

`func (o *KafkaSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *KafkaSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *KafkaSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *KafkaSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


