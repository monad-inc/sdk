# KafkaSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Acks** | Pointer to **string** | Acknowledgment level (0&#x3D;none, 1&#x3D;leader only, all&#x3D;all replicas) | [optional] 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**BootstrapServers** | Pointer to **string** | Comma-separated list of Kafka broker addresses (host:port) | [optional] 
**CompressionType** | Pointer to **string** | Compression codec for messages (none, gzip, snappy, lz4, zstd) | [optional] 
**Headers** | Pointer to [**[]KafkaKafkaHeader**](KafkaKafkaHeader.md) | Static headers to add to each Kafka message | [optional] 
**MessageKeyField** | Pointer to **string** | JSON field path to extract as the Kafka message key (uses gjson syntax) | [optional] 
**Retries** | Pointer to **int32** | Number of retry attempts for failed writes | [optional] 
**SaslMechanism** | Pointer to **string** | SASL authentication mechanism (PLAIN, SCRAM-SHA-256, SCRAM-SHA-512) | [optional] 
**SecurityProtocol** | Pointer to **string** | Security protocol for broker connections (NONE, SASL_PLAINTEXT, SASL_SSL, SSL) | [optional] 
**Topic** | Pointer to **string** | The Kafka topic to publish messages to | [optional] 
**Username** | Pointer to **string** | Username for SASL authentication | [optional] 

## Methods

### NewKafkaSettingsConfig

`func NewKafkaSettingsConfig() *KafkaSettingsConfig`

NewKafkaSettingsConfig instantiates a new KafkaSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKafkaSettingsConfigWithDefaults

`func NewKafkaSettingsConfigWithDefaults() *KafkaSettingsConfig`

NewKafkaSettingsConfigWithDefaults instantiates a new KafkaSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAcks

`func (o *KafkaSettingsConfig) GetAcks() string`

GetAcks returns the Acks field if non-nil, zero value otherwise.

### GetAcksOk

`func (o *KafkaSettingsConfig) GetAcksOk() (*string, bool)`

GetAcksOk returns a tuple with the Acks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcks

`func (o *KafkaSettingsConfig) SetAcks(v string)`

SetAcks sets Acks field to given value.

### HasAcks

`func (o *KafkaSettingsConfig) HasAcks() bool`

HasAcks returns a boolean if a field has been set.

### GetBatchConfig

`func (o *KafkaSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *KafkaSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *KafkaSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *KafkaSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBootstrapServers

`func (o *KafkaSettingsConfig) GetBootstrapServers() string`

GetBootstrapServers returns the BootstrapServers field if non-nil, zero value otherwise.

### GetBootstrapServersOk

`func (o *KafkaSettingsConfig) GetBootstrapServersOk() (*string, bool)`

GetBootstrapServersOk returns a tuple with the BootstrapServers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBootstrapServers

`func (o *KafkaSettingsConfig) SetBootstrapServers(v string)`

SetBootstrapServers sets BootstrapServers field to given value.

### HasBootstrapServers

`func (o *KafkaSettingsConfig) HasBootstrapServers() bool`

HasBootstrapServers returns a boolean if a field has been set.

### GetCompressionType

`func (o *KafkaSettingsConfig) GetCompressionType() string`

GetCompressionType returns the CompressionType field if non-nil, zero value otherwise.

### GetCompressionTypeOk

`func (o *KafkaSettingsConfig) GetCompressionTypeOk() (*string, bool)`

GetCompressionTypeOk returns a tuple with the CompressionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressionType

`func (o *KafkaSettingsConfig) SetCompressionType(v string)`

SetCompressionType sets CompressionType field to given value.

### HasCompressionType

`func (o *KafkaSettingsConfig) HasCompressionType() bool`

HasCompressionType returns a boolean if a field has been set.

### GetHeaders

`func (o *KafkaSettingsConfig) GetHeaders() []KafkaKafkaHeader`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *KafkaSettingsConfig) GetHeadersOk() (*[]KafkaKafkaHeader, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *KafkaSettingsConfig) SetHeaders(v []KafkaKafkaHeader)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *KafkaSettingsConfig) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetMessageKeyField

`func (o *KafkaSettingsConfig) GetMessageKeyField() string`

GetMessageKeyField returns the MessageKeyField field if non-nil, zero value otherwise.

### GetMessageKeyFieldOk

`func (o *KafkaSettingsConfig) GetMessageKeyFieldOk() (*string, bool)`

GetMessageKeyFieldOk returns a tuple with the MessageKeyField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageKeyField

`func (o *KafkaSettingsConfig) SetMessageKeyField(v string)`

SetMessageKeyField sets MessageKeyField field to given value.

### HasMessageKeyField

`func (o *KafkaSettingsConfig) HasMessageKeyField() bool`

HasMessageKeyField returns a boolean if a field has been set.

### GetRetries

`func (o *KafkaSettingsConfig) GetRetries() int32`

GetRetries returns the Retries field if non-nil, zero value otherwise.

### GetRetriesOk

`func (o *KafkaSettingsConfig) GetRetriesOk() (*int32, bool)`

GetRetriesOk returns a tuple with the Retries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetries

`func (o *KafkaSettingsConfig) SetRetries(v int32)`

SetRetries sets Retries field to given value.

### HasRetries

`func (o *KafkaSettingsConfig) HasRetries() bool`

HasRetries returns a boolean if a field has been set.

### GetSaslMechanism

`func (o *KafkaSettingsConfig) GetSaslMechanism() string`

GetSaslMechanism returns the SaslMechanism field if non-nil, zero value otherwise.

### GetSaslMechanismOk

`func (o *KafkaSettingsConfig) GetSaslMechanismOk() (*string, bool)`

GetSaslMechanismOk returns a tuple with the SaslMechanism field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaslMechanism

`func (o *KafkaSettingsConfig) SetSaslMechanism(v string)`

SetSaslMechanism sets SaslMechanism field to given value.

### HasSaslMechanism

`func (o *KafkaSettingsConfig) HasSaslMechanism() bool`

HasSaslMechanism returns a boolean if a field has been set.

### GetSecurityProtocol

`func (o *KafkaSettingsConfig) GetSecurityProtocol() string`

GetSecurityProtocol returns the SecurityProtocol field if non-nil, zero value otherwise.

### GetSecurityProtocolOk

`func (o *KafkaSettingsConfig) GetSecurityProtocolOk() (*string, bool)`

GetSecurityProtocolOk returns a tuple with the SecurityProtocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityProtocol

`func (o *KafkaSettingsConfig) SetSecurityProtocol(v string)`

SetSecurityProtocol sets SecurityProtocol field to given value.

### HasSecurityProtocol

`func (o *KafkaSettingsConfig) HasSecurityProtocol() bool`

HasSecurityProtocol returns a boolean if a field has been set.

### GetTopic

`func (o *KafkaSettingsConfig) GetTopic() string`

GetTopic returns the Topic field if non-nil, zero value otherwise.

### GetTopicOk

`func (o *KafkaSettingsConfig) GetTopicOk() (*string, bool)`

GetTopicOk returns a tuple with the Topic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopic

`func (o *KafkaSettingsConfig) SetTopic(v string)`

SetTopic sets Topic field to given value.

### HasTopic

`func (o *KafkaSettingsConfig) HasTopic() bool`

HasTopic returns a boolean if a field has been set.

### GetUsername

`func (o *KafkaSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *KafkaSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *KafkaSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *KafkaSettingsConfig) HasUsername() bool`

HasUsername returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


