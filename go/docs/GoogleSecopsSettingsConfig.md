# GoogleSecopsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**CollectionTimePath** | **string** |  | 
**Compress** | Pointer to **bool** |  | [optional] 
**CredentialsJson** | [**ModelsSecret**](ModelsSecret.md) |  | 
**Endpoint** | Pointer to **string** |  | [optional] 
**EnvironmentNamespace** | Pointer to **string** |  | [optional] 
**Forwarder** | Pointer to **string** |  | [optional] 
**InstanceId** | **string** |  | 
**LogEntryTimePath** | **string** |  | 
**LogType** | **string** |  | 
**ProjectId** | **string** |  | 
**Region** | **string** |  | 

## Methods

### NewGoogleSecopsSettingsConfig

`func NewGoogleSecopsSettingsConfig(collectionTimePath string, credentialsJson ModelsSecret, instanceId string, logEntryTimePath string, logType string, projectId string, region string, ) *GoogleSecopsSettingsConfig`

NewGoogleSecopsSettingsConfig instantiates a new GoogleSecopsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoogleSecopsSettingsConfigWithDefaults

`func NewGoogleSecopsSettingsConfigWithDefaults() *GoogleSecopsSettingsConfig`

NewGoogleSecopsSettingsConfigWithDefaults instantiates a new GoogleSecopsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *GoogleSecopsSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *GoogleSecopsSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *GoogleSecopsSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *GoogleSecopsSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetCollectionTimePath

`func (o *GoogleSecopsSettingsConfig) GetCollectionTimePath() string`

GetCollectionTimePath returns the CollectionTimePath field if non-nil, zero value otherwise.

### GetCollectionTimePathOk

`func (o *GoogleSecopsSettingsConfig) GetCollectionTimePathOk() (*string, bool)`

GetCollectionTimePathOk returns a tuple with the CollectionTimePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectionTimePath

`func (o *GoogleSecopsSettingsConfig) SetCollectionTimePath(v string)`

SetCollectionTimePath sets CollectionTimePath field to given value.


### GetCompress

`func (o *GoogleSecopsSettingsConfig) GetCompress() bool`

GetCompress returns the Compress field if non-nil, zero value otherwise.

### GetCompressOk

`func (o *GoogleSecopsSettingsConfig) GetCompressOk() (*bool, bool)`

GetCompressOk returns a tuple with the Compress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompress

`func (o *GoogleSecopsSettingsConfig) SetCompress(v bool)`

SetCompress sets Compress field to given value.

### HasCompress

`func (o *GoogleSecopsSettingsConfig) HasCompress() bool`

HasCompress returns a boolean if a field has been set.

### GetCredentialsJson

`func (o *GoogleSecopsSettingsConfig) GetCredentialsJson() ModelsSecret`

GetCredentialsJson returns the CredentialsJson field if non-nil, zero value otherwise.

### GetCredentialsJsonOk

`func (o *GoogleSecopsSettingsConfig) GetCredentialsJsonOk() (*ModelsSecret, bool)`

GetCredentialsJsonOk returns a tuple with the CredentialsJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsJson

`func (o *GoogleSecopsSettingsConfig) SetCredentialsJson(v ModelsSecret)`

SetCredentialsJson sets CredentialsJson field to given value.


### GetEndpoint

`func (o *GoogleSecopsSettingsConfig) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *GoogleSecopsSettingsConfig) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *GoogleSecopsSettingsConfig) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *GoogleSecopsSettingsConfig) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetEnvironmentNamespace

`func (o *GoogleSecopsSettingsConfig) GetEnvironmentNamespace() string`

GetEnvironmentNamespace returns the EnvironmentNamespace field if non-nil, zero value otherwise.

### GetEnvironmentNamespaceOk

`func (o *GoogleSecopsSettingsConfig) GetEnvironmentNamespaceOk() (*string, bool)`

GetEnvironmentNamespaceOk returns a tuple with the EnvironmentNamespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentNamespace

`func (o *GoogleSecopsSettingsConfig) SetEnvironmentNamespace(v string)`

SetEnvironmentNamespace sets EnvironmentNamespace field to given value.

### HasEnvironmentNamespace

`func (o *GoogleSecopsSettingsConfig) HasEnvironmentNamespace() bool`

HasEnvironmentNamespace returns a boolean if a field has been set.

### GetForwarder

`func (o *GoogleSecopsSettingsConfig) GetForwarder() string`

GetForwarder returns the Forwarder field if non-nil, zero value otherwise.

### GetForwarderOk

`func (o *GoogleSecopsSettingsConfig) GetForwarderOk() (*string, bool)`

GetForwarderOk returns a tuple with the Forwarder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwarder

`func (o *GoogleSecopsSettingsConfig) SetForwarder(v string)`

SetForwarder sets Forwarder field to given value.

### HasForwarder

`func (o *GoogleSecopsSettingsConfig) HasForwarder() bool`

HasForwarder returns a boolean if a field has been set.

### GetInstanceId

`func (o *GoogleSecopsSettingsConfig) GetInstanceId() string`

GetInstanceId returns the InstanceId field if non-nil, zero value otherwise.

### GetInstanceIdOk

`func (o *GoogleSecopsSettingsConfig) GetInstanceIdOk() (*string, bool)`

GetInstanceIdOk returns a tuple with the InstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceId

`func (o *GoogleSecopsSettingsConfig) SetInstanceId(v string)`

SetInstanceId sets InstanceId field to given value.


### GetLogEntryTimePath

`func (o *GoogleSecopsSettingsConfig) GetLogEntryTimePath() string`

GetLogEntryTimePath returns the LogEntryTimePath field if non-nil, zero value otherwise.

### GetLogEntryTimePathOk

`func (o *GoogleSecopsSettingsConfig) GetLogEntryTimePathOk() (*string, bool)`

GetLogEntryTimePathOk returns a tuple with the LogEntryTimePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogEntryTimePath

`func (o *GoogleSecopsSettingsConfig) SetLogEntryTimePath(v string)`

SetLogEntryTimePath sets LogEntryTimePath field to given value.


### GetLogType

`func (o *GoogleSecopsSettingsConfig) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *GoogleSecopsSettingsConfig) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *GoogleSecopsSettingsConfig) SetLogType(v string)`

SetLogType sets LogType field to given value.


### GetProjectId

`func (o *GoogleSecopsSettingsConfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *GoogleSecopsSettingsConfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *GoogleSecopsSettingsConfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.


### GetRegion

`func (o *GoogleSecopsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *GoogleSecopsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *GoogleSecopsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


