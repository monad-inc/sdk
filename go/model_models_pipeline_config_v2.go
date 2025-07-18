/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
)

// checks if the ModelsPipelineConfigV2 type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelsPipelineConfigV2{}

// ModelsPipelineConfigV2 struct for ModelsPipelineConfigV2
type ModelsPipelineConfigV2 struct {
	BillingAccountId *string `json:"billingAccountId,omitempty"`
	ComponentTier *int32 `json:"component_tier,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CronSchedule *string `json:"cron_schedule,omitempty"`
	Description *string `json:"description,omitempty"`
	Edges []ModelsPipelineEdge `json:"edges,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	NextCronRunAt *string `json:"next_cron_run_at,omitempty"`
	Nodes []ModelsPipelineNode `json:"nodes,omitempty"`
	OrganizationId *string `json:"organizationId,omitempty"`
	OrganizationName *string `json:"organizationName,omitempty"`
	RetentionPolicy *ModelsPipelineRetentionPolicy `json:"retention_policy,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// NewModelsPipelineConfigV2 instantiates a new ModelsPipelineConfigV2 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelsPipelineConfigV2() *ModelsPipelineConfigV2 {
	this := ModelsPipelineConfigV2{}
	return &this
}

// NewModelsPipelineConfigV2WithDefaults instantiates a new ModelsPipelineConfigV2 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelsPipelineConfigV2WithDefaults() *ModelsPipelineConfigV2 {
	this := ModelsPipelineConfigV2{}
	return &this
}

// GetBillingAccountId returns the BillingAccountId field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetBillingAccountId() string {
	if o == nil || IsNil(o.BillingAccountId) {
		var ret string
		return ret
	}
	return *o.BillingAccountId
}

// GetBillingAccountIdOk returns a tuple with the BillingAccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetBillingAccountIdOk() (*string, bool) {
	if o == nil || IsNil(o.BillingAccountId) {
		return nil, false
	}
	return o.BillingAccountId, true
}

// HasBillingAccountId returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasBillingAccountId() bool {
	if o != nil && !IsNil(o.BillingAccountId) {
		return true
	}

	return false
}

// SetBillingAccountId gets a reference to the given string and assigns it to the BillingAccountId field.
func (o *ModelsPipelineConfigV2) SetBillingAccountId(v string) {
	o.BillingAccountId = &v
}

// GetComponentTier returns the ComponentTier field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetComponentTier() int32 {
	if o == nil || IsNil(o.ComponentTier) {
		var ret int32
		return ret
	}
	return *o.ComponentTier
}

// GetComponentTierOk returns a tuple with the ComponentTier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetComponentTierOk() (*int32, bool) {
	if o == nil || IsNil(o.ComponentTier) {
		return nil, false
	}
	return o.ComponentTier, true
}

// HasComponentTier returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasComponentTier() bool {
	if o != nil && !IsNil(o.ComponentTier) {
		return true
	}

	return false
}

// SetComponentTier gets a reference to the given int32 and assigns it to the ComponentTier field.
func (o *ModelsPipelineConfigV2) SetComponentTier(v int32) {
	o.ComponentTier = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetCreatedAt() string {
	if o == nil || IsNil(o.CreatedAt) {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetCreatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasCreatedAt() bool {
	if o != nil && !IsNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *ModelsPipelineConfigV2) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetCronSchedule returns the CronSchedule field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetCronSchedule() string {
	if o == nil || IsNil(o.CronSchedule) {
		var ret string
		return ret
	}
	return *o.CronSchedule
}

// GetCronScheduleOk returns a tuple with the CronSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetCronScheduleOk() (*string, bool) {
	if o == nil || IsNil(o.CronSchedule) {
		return nil, false
	}
	return o.CronSchedule, true
}

// HasCronSchedule returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasCronSchedule() bool {
	if o != nil && !IsNil(o.CronSchedule) {
		return true
	}

	return false
}

// SetCronSchedule gets a reference to the given string and assigns it to the CronSchedule field.
func (o *ModelsPipelineConfigV2) SetCronSchedule(v string) {
	o.CronSchedule = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ModelsPipelineConfigV2) SetDescription(v string) {
	o.Description = &v
}

// GetEdges returns the Edges field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetEdges() []ModelsPipelineEdge {
	if o == nil || IsNil(o.Edges) {
		var ret []ModelsPipelineEdge
		return ret
	}
	return o.Edges
}

// GetEdgesOk returns a tuple with the Edges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetEdgesOk() ([]ModelsPipelineEdge, bool) {
	if o == nil || IsNil(o.Edges) {
		return nil, false
	}
	return o.Edges, true
}

// HasEdges returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasEdges() bool {
	if o != nil && !IsNil(o.Edges) {
		return true
	}

	return false
}

// SetEdges gets a reference to the given []ModelsPipelineEdge and assigns it to the Edges field.
func (o *ModelsPipelineConfigV2) SetEdges(v []ModelsPipelineEdge) {
	o.Edges = v
}

// GetEnabled returns the Enabled field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetEnabled() bool {
	if o == nil || IsNil(o.Enabled) {
		var ret bool
		return ret
	}
	return *o.Enabled
}

// GetEnabledOk returns a tuple with the Enabled field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetEnabledOk() (*bool, bool) {
	if o == nil || IsNil(o.Enabled) {
		return nil, false
	}
	return o.Enabled, true
}

// HasEnabled returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasEnabled() bool {
	if o != nil && !IsNil(o.Enabled) {
		return true
	}

	return false
}

// SetEnabled gets a reference to the given bool and assigns it to the Enabled field.
func (o *ModelsPipelineConfigV2) SetEnabled(v bool) {
	o.Enabled = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ModelsPipelineConfigV2) SetId(v string) {
	o.Id = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ModelsPipelineConfigV2) SetName(v string) {
	o.Name = &v
}

// GetNextCronRunAt returns the NextCronRunAt field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetNextCronRunAt() string {
	if o == nil || IsNil(o.NextCronRunAt) {
		var ret string
		return ret
	}
	return *o.NextCronRunAt
}

// GetNextCronRunAtOk returns a tuple with the NextCronRunAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetNextCronRunAtOk() (*string, bool) {
	if o == nil || IsNil(o.NextCronRunAt) {
		return nil, false
	}
	return o.NextCronRunAt, true
}

// HasNextCronRunAt returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasNextCronRunAt() bool {
	if o != nil && !IsNil(o.NextCronRunAt) {
		return true
	}

	return false
}

// SetNextCronRunAt gets a reference to the given string and assigns it to the NextCronRunAt field.
func (o *ModelsPipelineConfigV2) SetNextCronRunAt(v string) {
	o.NextCronRunAt = &v
}

// GetNodes returns the Nodes field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetNodes() []ModelsPipelineNode {
	if o == nil || IsNil(o.Nodes) {
		var ret []ModelsPipelineNode
		return ret
	}
	return o.Nodes
}

// GetNodesOk returns a tuple with the Nodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetNodesOk() ([]ModelsPipelineNode, bool) {
	if o == nil || IsNil(o.Nodes) {
		return nil, false
	}
	return o.Nodes, true
}

// HasNodes returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasNodes() bool {
	if o != nil && !IsNil(o.Nodes) {
		return true
	}

	return false
}

// SetNodes gets a reference to the given []ModelsPipelineNode and assigns it to the Nodes field.
func (o *ModelsPipelineConfigV2) SetNodes(v []ModelsPipelineNode) {
	o.Nodes = v
}

// GetOrganizationId returns the OrganizationId field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetOrganizationId() string {
	if o == nil || IsNil(o.OrganizationId) {
		var ret string
		return ret
	}
	return *o.OrganizationId
}

// GetOrganizationIdOk returns a tuple with the OrganizationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetOrganizationIdOk() (*string, bool) {
	if o == nil || IsNil(o.OrganizationId) {
		return nil, false
	}
	return o.OrganizationId, true
}

// HasOrganizationId returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasOrganizationId() bool {
	if o != nil && !IsNil(o.OrganizationId) {
		return true
	}

	return false
}

// SetOrganizationId gets a reference to the given string and assigns it to the OrganizationId field.
func (o *ModelsPipelineConfigV2) SetOrganizationId(v string) {
	o.OrganizationId = &v
}

// GetOrganizationName returns the OrganizationName field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetOrganizationName() string {
	if o == nil || IsNil(o.OrganizationName) {
		var ret string
		return ret
	}
	return *o.OrganizationName
}

// GetOrganizationNameOk returns a tuple with the OrganizationName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetOrganizationNameOk() (*string, bool) {
	if o == nil || IsNil(o.OrganizationName) {
		return nil, false
	}
	return o.OrganizationName, true
}

// HasOrganizationName returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasOrganizationName() bool {
	if o != nil && !IsNil(o.OrganizationName) {
		return true
	}

	return false
}

// SetOrganizationName gets a reference to the given string and assigns it to the OrganizationName field.
func (o *ModelsPipelineConfigV2) SetOrganizationName(v string) {
	o.OrganizationName = &v
}

// GetRetentionPolicy returns the RetentionPolicy field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetRetentionPolicy() ModelsPipelineRetentionPolicy {
	if o == nil || IsNil(o.RetentionPolicy) {
		var ret ModelsPipelineRetentionPolicy
		return ret
	}
	return *o.RetentionPolicy
}

// GetRetentionPolicyOk returns a tuple with the RetentionPolicy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetRetentionPolicyOk() (*ModelsPipelineRetentionPolicy, bool) {
	if o == nil || IsNil(o.RetentionPolicy) {
		return nil, false
	}
	return o.RetentionPolicy, true
}

// HasRetentionPolicy returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasRetentionPolicy() bool {
	if o != nil && !IsNil(o.RetentionPolicy) {
		return true
	}

	return false
}

// SetRetentionPolicy gets a reference to the given ModelsPipelineRetentionPolicy and assigns it to the RetentionPolicy field.
func (o *ModelsPipelineConfigV2) SetRetentionPolicy(v ModelsPipelineRetentionPolicy) {
	o.RetentionPolicy = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *ModelsPipelineConfigV2) GetUpdatedAt() string {
	if o == nil || IsNil(o.UpdatedAt) {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ModelsPipelineConfigV2) GetUpdatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.UpdatedAt) {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *ModelsPipelineConfigV2) HasUpdatedAt() bool {
	if o != nil && !IsNil(o.UpdatedAt) {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *ModelsPipelineConfigV2) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

func (o ModelsPipelineConfigV2) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelsPipelineConfigV2) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BillingAccountId) {
		toSerialize["billingAccountId"] = o.BillingAccountId
	}
	if !IsNil(o.ComponentTier) {
		toSerialize["component_tier"] = o.ComponentTier
	}
	if !IsNil(o.CreatedAt) {
		toSerialize["createdAt"] = o.CreatedAt
	}
	if !IsNil(o.CronSchedule) {
		toSerialize["cron_schedule"] = o.CronSchedule
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Edges) {
		toSerialize["edges"] = o.Edges
	}
	if !IsNil(o.Enabled) {
		toSerialize["enabled"] = o.Enabled
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.NextCronRunAt) {
		toSerialize["next_cron_run_at"] = o.NextCronRunAt
	}
	if !IsNil(o.Nodes) {
		toSerialize["nodes"] = o.Nodes
	}
	if !IsNil(o.OrganizationId) {
		toSerialize["organizationId"] = o.OrganizationId
	}
	if !IsNil(o.OrganizationName) {
		toSerialize["organizationName"] = o.OrganizationName
	}
	if !IsNil(o.RetentionPolicy) {
		toSerialize["retention_policy"] = o.RetentionPolicy
	}
	if !IsNil(o.UpdatedAt) {
		toSerialize["updatedAt"] = o.UpdatedAt
	}
	return toSerialize, nil
}

type NullableModelsPipelineConfigV2 struct {
	value *ModelsPipelineConfigV2
	isSet bool
}

func (v NullableModelsPipelineConfigV2) Get() *ModelsPipelineConfigV2 {
	return v.value
}

func (v *NullableModelsPipelineConfigV2) Set(val *ModelsPipelineConfigV2) {
	v.value = val
	v.isSet = true
}

func (v NullableModelsPipelineConfigV2) IsSet() bool {
	return v.isSet
}

func (v *NullableModelsPipelineConfigV2) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelsPipelineConfigV2(val *ModelsPipelineConfigV2) *NullableModelsPipelineConfigV2 {
	return &NullableModelsPipelineConfigV2{value: val, isSet: true}
}

func (v NullableModelsPipelineConfigV2) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelsPipelineConfigV2) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


