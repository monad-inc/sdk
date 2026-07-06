# UpdateBillingAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingEmail** | Pointer to **string** | Email address for billing. Nil preserves the current value. | [optional] 
**Description** | Pointer to **string** | Description of the billing account. Nil preserves the current value. | [optional] 
**Name** | Pointer to **string** | Name of the billing account. Nil preserves the current value. | [optional] 

## Methods

### NewUpdateBillingAccountRequest

`func NewUpdateBillingAccountRequest() *UpdateBillingAccountRequest`

NewUpdateBillingAccountRequest instantiates a new UpdateBillingAccountRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateBillingAccountRequestWithDefaults

`func NewUpdateBillingAccountRequestWithDefaults() *UpdateBillingAccountRequest`

NewUpdateBillingAccountRequestWithDefaults instantiates a new UpdateBillingAccountRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingEmail

`func (o *UpdateBillingAccountRequest) GetBillingEmail() string`

GetBillingEmail returns the BillingEmail field if non-nil, zero value otherwise.

### GetBillingEmailOk

`func (o *UpdateBillingAccountRequest) GetBillingEmailOk() (*string, bool)`

GetBillingEmailOk returns a tuple with the BillingEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingEmail

`func (o *UpdateBillingAccountRequest) SetBillingEmail(v string)`

SetBillingEmail sets BillingEmail field to given value.

### HasBillingEmail

`func (o *UpdateBillingAccountRequest) HasBillingEmail() bool`

HasBillingEmail returns a boolean if a field has been set.

### GetDescription

`func (o *UpdateBillingAccountRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateBillingAccountRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateBillingAccountRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateBillingAccountRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *UpdateBillingAccountRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateBillingAccountRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateBillingAccountRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateBillingAccountRequest) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


