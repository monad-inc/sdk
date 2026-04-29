# ReplaceEnrichmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewReplaceEnrichmentRequest

`func NewReplaceEnrichmentRequest() *ReplaceEnrichmentRequest`

NewReplaceEnrichmentRequest instantiates a new ReplaceEnrichmentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplaceEnrichmentRequestWithDefaults

`func NewReplaceEnrichmentRequestWithDefaults() *ReplaceEnrichmentRequest`

NewReplaceEnrichmentRequestWithDefaults instantiates a new ReplaceEnrichmentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *ReplaceEnrichmentRequest) GetConfig() SecretProcessesorEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ReplaceEnrichmentRequest) GetConfigOk() (*SecretProcessesorEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ReplaceEnrichmentRequest) SetConfig(v SecretProcessesorEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *ReplaceEnrichmentRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *ReplaceEnrichmentRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReplaceEnrichmentRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReplaceEnrichmentRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReplaceEnrichmentRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *ReplaceEnrichmentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReplaceEnrichmentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReplaceEnrichmentRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReplaceEnrichmentRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ReplaceEnrichmentRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReplaceEnrichmentRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReplaceEnrichmentRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReplaceEnrichmentRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


