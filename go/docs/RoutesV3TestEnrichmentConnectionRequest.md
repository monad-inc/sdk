# RoutesV3TestEnrichmentConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV3TestEnrichmentConnectionRequest

`func NewRoutesV3TestEnrichmentConnectionRequest() *RoutesV3TestEnrichmentConnectionRequest`

NewRoutesV3TestEnrichmentConnectionRequest instantiates a new RoutesV3TestEnrichmentConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3TestEnrichmentConnectionRequestWithDefaults

`func NewRoutesV3TestEnrichmentConnectionRequestWithDefaults() *RoutesV3TestEnrichmentConnectionRequest`

NewRoutesV3TestEnrichmentConnectionRequestWithDefaults instantiates a new RoutesV3TestEnrichmentConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3TestEnrichmentConnectionRequest) GetConfig() SecretProcessesorEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3TestEnrichmentConnectionRequest) GetConfigOk() (*SecretProcessesorEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3TestEnrichmentConnectionRequest) SetConfig(v SecretProcessesorEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3TestEnrichmentConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3TestEnrichmentConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3TestEnrichmentConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3TestEnrichmentConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3TestEnrichmentConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


