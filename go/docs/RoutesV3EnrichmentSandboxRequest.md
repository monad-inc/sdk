# RoutesV3EnrichmentSandboxRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**Record** | Pointer to **[]int32** |  | [optional] 
**TypeId** | Pointer to **string** |  | [optional] 
**UseMockedData** | Pointer to **bool** |  | [optional] 

## Methods

### NewRoutesV3EnrichmentSandboxRequest

`func NewRoutesV3EnrichmentSandboxRequest() *RoutesV3EnrichmentSandboxRequest`

NewRoutesV3EnrichmentSandboxRequest instantiates a new RoutesV3EnrichmentSandboxRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3EnrichmentSandboxRequestWithDefaults

`func NewRoutesV3EnrichmentSandboxRequestWithDefaults() *RoutesV3EnrichmentSandboxRequest`

NewRoutesV3EnrichmentSandboxRequestWithDefaults instantiates a new RoutesV3EnrichmentSandboxRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3EnrichmentSandboxRequest) GetConfig() SecretProcessesorEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3EnrichmentSandboxRequest) GetConfigOk() (*SecretProcessesorEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3EnrichmentSandboxRequest) SetConfig(v SecretProcessesorEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3EnrichmentSandboxRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetRecord

`func (o *RoutesV3EnrichmentSandboxRequest) GetRecord() []int32`

GetRecord returns the Record field if non-nil, zero value otherwise.

### GetRecordOk

`func (o *RoutesV3EnrichmentSandboxRequest) GetRecordOk() (*[]int32, bool)`

GetRecordOk returns a tuple with the Record field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecord

`func (o *RoutesV3EnrichmentSandboxRequest) SetRecord(v []int32)`

SetRecord sets Record field to given value.

### HasRecord

`func (o *RoutesV3EnrichmentSandboxRequest) HasRecord() bool`

HasRecord returns a boolean if a field has been set.

### GetTypeId

`func (o *RoutesV3EnrichmentSandboxRequest) GetTypeId() string`

GetTypeId returns the TypeId field if non-nil, zero value otherwise.

### GetTypeIdOk

`func (o *RoutesV3EnrichmentSandboxRequest) GetTypeIdOk() (*string, bool)`

GetTypeIdOk returns a tuple with the TypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeId

`func (o *RoutesV3EnrichmentSandboxRequest) SetTypeId(v string)`

SetTypeId sets TypeId field to given value.

### HasTypeId

`func (o *RoutesV3EnrichmentSandboxRequest) HasTypeId() bool`

HasTypeId returns a boolean if a field has been set.

### GetUseMockedData

`func (o *RoutesV3EnrichmentSandboxRequest) GetUseMockedData() bool`

GetUseMockedData returns the UseMockedData field if non-nil, zero value otherwise.

### GetUseMockedDataOk

`func (o *RoutesV3EnrichmentSandboxRequest) GetUseMockedDataOk() (*bool, bool)`

GetUseMockedDataOk returns a tuple with the UseMockedData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseMockedData

`func (o *RoutesV3EnrichmentSandboxRequest) SetUseMockedData(v bool)`

SetUseMockedData sets UseMockedData field to given value.

### HasUseMockedData

`func (o *RoutesV3EnrichmentSandboxRequest) HasUseMockedData() bool`

HasUseMockedData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


