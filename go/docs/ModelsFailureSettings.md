# ModelsFailureSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | Pointer to [**ModelsDeadLetterAction**](ModelsDeadLetterAction.md) |  | [optional] 
**RetryFor** | Pointer to **string** | RetryFor is how long a record may keep failing at one node before it is dead-lettered, as a Go duration. Required. | [optional] 
**Sink** | Pointer to [**ModelsFailureSink**](ModelsFailureSink.md) |  | [optional] 

## Methods

### NewModelsFailureSettings

`func NewModelsFailureSettings() *ModelsFailureSettings`

NewModelsFailureSettings instantiates a new ModelsFailureSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsFailureSettingsWithDefaults

`func NewModelsFailureSettingsWithDefaults() *ModelsFailureSettings`

NewModelsFailureSettingsWithDefaults instantiates a new ModelsFailureSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *ModelsFailureSettings) GetAction() ModelsDeadLetterAction`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *ModelsFailureSettings) GetActionOk() (*ModelsDeadLetterAction, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *ModelsFailureSettings) SetAction(v ModelsDeadLetterAction)`

SetAction sets Action field to given value.

### HasAction

`func (o *ModelsFailureSettings) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetRetryFor

`func (o *ModelsFailureSettings) GetRetryFor() string`

GetRetryFor returns the RetryFor field if non-nil, zero value otherwise.

### GetRetryForOk

`func (o *ModelsFailureSettings) GetRetryForOk() (*string, bool)`

GetRetryForOk returns a tuple with the RetryFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryFor

`func (o *ModelsFailureSettings) SetRetryFor(v string)`

SetRetryFor sets RetryFor field to given value.

### HasRetryFor

`func (o *ModelsFailureSettings) HasRetryFor() bool`

HasRetryFor returns a boolean if a field has been set.

### GetSink

`func (o *ModelsFailureSettings) GetSink() ModelsFailureSink`

GetSink returns the Sink field if non-nil, zero value otherwise.

### GetSinkOk

`func (o *ModelsFailureSettings) GetSinkOk() (*ModelsFailureSink, bool)`

GetSinkOk returns a tuple with the Sink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSink

`func (o *ModelsFailureSettings) SetSink(v ModelsFailureSink)`

SetSink sets Sink field to given value.

### HasSink

`func (o *ModelsFailureSettings) HasSink() bool`

HasSink returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


