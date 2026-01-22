# PipelineNodeStatusProgressTimestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Label** | Pointer to **string** | Label is an optional descriptor for the timestamp that is human-readable and can be displayed in the UI It should mainly be used to contain the field name/path that is used to extract timestamp for a given inputs data | [optional] 
**PartitionKey** | Pointer to **string** | PartitionKey is an optional identifier for multi-entity inputs (e.g., \&quot;detector-123\&quot;, \&quot;us-east-1\&quot;) In a case where we store multiple state timestamps for a singular input we would use this field as a differentiator | [optional] 
**Timestamp** | Pointer to **string** | Timestamp indicates the progress position | [optional] 

## Methods

### NewPipelineNodeStatusProgressTimestamp

`func NewPipelineNodeStatusProgressTimestamp() *PipelineNodeStatusProgressTimestamp`

NewPipelineNodeStatusProgressTimestamp instantiates a new PipelineNodeStatusProgressTimestamp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPipelineNodeStatusProgressTimestampWithDefaults

`func NewPipelineNodeStatusProgressTimestampWithDefaults() *PipelineNodeStatusProgressTimestamp`

NewPipelineNodeStatusProgressTimestampWithDefaults instantiates a new PipelineNodeStatusProgressTimestamp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLabel

`func (o *PipelineNodeStatusProgressTimestamp) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *PipelineNodeStatusProgressTimestamp) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *PipelineNodeStatusProgressTimestamp) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *PipelineNodeStatusProgressTimestamp) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetPartitionKey

`func (o *PipelineNodeStatusProgressTimestamp) GetPartitionKey() string`

GetPartitionKey returns the PartitionKey field if non-nil, zero value otherwise.

### GetPartitionKeyOk

`func (o *PipelineNodeStatusProgressTimestamp) GetPartitionKeyOk() (*string, bool)`

GetPartitionKeyOk returns a tuple with the PartitionKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionKey

`func (o *PipelineNodeStatusProgressTimestamp) SetPartitionKey(v string)`

SetPartitionKey sets PartitionKey field to given value.

### HasPartitionKey

`func (o *PipelineNodeStatusProgressTimestamp) HasPartitionKey() bool`

HasPartitionKey returns a boolean if a field has been set.

### GetTimestamp

`func (o *PipelineNodeStatusProgressTimestamp) GetTimestamp() string`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *PipelineNodeStatusProgressTimestamp) GetTimestampOk() (*string, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *PipelineNodeStatusProgressTimestamp) SetTimestamp(v string)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *PipelineNodeStatusProgressTimestamp) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


