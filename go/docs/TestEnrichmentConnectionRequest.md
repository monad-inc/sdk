# TestEnrichmentConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewTestEnrichmentConnectionRequest

`func NewTestEnrichmentConnectionRequest() *TestEnrichmentConnectionRequest`

NewTestEnrichmentConnectionRequest instantiates a new TestEnrichmentConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestEnrichmentConnectionRequestWithDefaults

`func NewTestEnrichmentConnectionRequestWithDefaults() *TestEnrichmentConnectionRequest`

NewTestEnrichmentConnectionRequestWithDefaults instantiates a new TestEnrichmentConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *TestEnrichmentConnectionRequest) GetConfig() SecretProcessesorEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *TestEnrichmentConnectionRequest) GetConfigOk() (*SecretProcessesorEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *TestEnrichmentConnectionRequest) SetConfig(v SecretProcessesorEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *TestEnrichmentConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *TestEnrichmentConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TestEnrichmentConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TestEnrichmentConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TestEnrichmentConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


