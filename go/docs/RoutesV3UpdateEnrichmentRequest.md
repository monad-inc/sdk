# RoutesV3UpdateEnrichmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV3UpdateEnrichmentRequest

`func NewRoutesV3UpdateEnrichmentRequest() *RoutesV3UpdateEnrichmentRequest`

NewRoutesV3UpdateEnrichmentRequest instantiates a new RoutesV3UpdateEnrichmentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3UpdateEnrichmentRequestWithDefaults

`func NewRoutesV3UpdateEnrichmentRequestWithDefaults() *RoutesV3UpdateEnrichmentRequest`

NewRoutesV3UpdateEnrichmentRequestWithDefaults instantiates a new RoutesV3UpdateEnrichmentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3UpdateEnrichmentRequest) GetConfig() SecretProcessesorEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3UpdateEnrichmentRequest) GetConfigOk() (*SecretProcessesorEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3UpdateEnrichmentRequest) SetConfig(v SecretProcessesorEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3UpdateEnrichmentRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3UpdateEnrichmentRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3UpdateEnrichmentRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3UpdateEnrichmentRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3UpdateEnrichmentRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3UpdateEnrichmentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3UpdateEnrichmentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3UpdateEnrichmentRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3UpdateEnrichmentRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3UpdateEnrichmentRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3UpdateEnrichmentRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3UpdateEnrichmentRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3UpdateEnrichmentRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


