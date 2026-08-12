# CreateEnrichmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorEnrichmentConfig**](SecretProcessesorEnrichmentConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateEnrichmentRequest

`func NewCreateEnrichmentRequest() *CreateEnrichmentRequest`

NewCreateEnrichmentRequest instantiates a new CreateEnrichmentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateEnrichmentRequestWithDefaults

`func NewCreateEnrichmentRequestWithDefaults() *CreateEnrichmentRequest`

NewCreateEnrichmentRequestWithDefaults instantiates a new CreateEnrichmentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *CreateEnrichmentRequest) GetConfig() SecretProcessesorEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *CreateEnrichmentRequest) GetConfigOk() (*SecretProcessesorEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *CreateEnrichmentRequest) SetConfig(v SecretProcessesorEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *CreateEnrichmentRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *CreateEnrichmentRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateEnrichmentRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateEnrichmentRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateEnrichmentRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *CreateEnrichmentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateEnrichmentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateEnrichmentRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateEnrichmentRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *CreateEnrichmentRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateEnrichmentRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateEnrichmentRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateEnrichmentRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


