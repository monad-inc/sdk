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

// checks if the GithubComMonadIncCorePkgTypesModelsQuota type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GithubComMonadIncCorePkgTypesModelsQuota{}

// GithubComMonadIncCorePkgTypesModelsQuota struct for GithubComMonadIncCorePkgTypesModelsQuota
type GithubComMonadIncCorePkgTypesModelsQuota struct {
	Action *string `json:"action,omitempty"`
	BillingAccountId *string `json:"billing_account_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentUsage *int32 `json:"current_usage,omitempty"`
	CurrentUsageUpdatedAt *string `json:"current_usage_updated_at,omitempty"`
	EndAt *string `json:"end_at,omitempty"`
	Id *string `json:"id,omitempty"`
	LimitAmount *int32 `json:"limit_amount,omitempty"`
	LimitType *string `json:"limit_type,omitempty"`
	LimitUnit *string `json:"limit_unit,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
	Timeframe *string `json:"timeframe,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// NewGithubComMonadIncCorePkgTypesModelsQuota instantiates a new GithubComMonadIncCorePkgTypesModelsQuota object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGithubComMonadIncCorePkgTypesModelsQuota() *GithubComMonadIncCorePkgTypesModelsQuota {
	this := GithubComMonadIncCorePkgTypesModelsQuota{}
	return &this
}

// NewGithubComMonadIncCorePkgTypesModelsQuotaWithDefaults instantiates a new GithubComMonadIncCorePkgTypesModelsQuota object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGithubComMonadIncCorePkgTypesModelsQuotaWithDefaults() *GithubComMonadIncCorePkgTypesModelsQuota {
	this := GithubComMonadIncCorePkgTypesModelsQuota{}
	return &this
}

// GetAction returns the Action field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetAction() string {
	if o == nil || IsNil(o.Action) {
		var ret string
		return ret
	}
	return *o.Action
}

// GetActionOk returns a tuple with the Action field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetActionOk() (*string, bool) {
	if o == nil || IsNil(o.Action) {
		return nil, false
	}
	return o.Action, true
}

// HasAction returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasAction() bool {
	if o != nil && !IsNil(o.Action) {
		return true
	}

	return false
}

// SetAction gets a reference to the given string and assigns it to the Action field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetAction(v string) {
	o.Action = &v
}

// GetBillingAccountId returns the BillingAccountId field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetBillingAccountId() string {
	if o == nil || IsNil(o.BillingAccountId) {
		var ret string
		return ret
	}
	return *o.BillingAccountId
}

// GetBillingAccountIdOk returns a tuple with the BillingAccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetBillingAccountIdOk() (*string, bool) {
	if o == nil || IsNil(o.BillingAccountId) {
		return nil, false
	}
	return o.BillingAccountId, true
}

// HasBillingAccountId returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasBillingAccountId() bool {
	if o != nil && !IsNil(o.BillingAccountId) {
		return true
	}

	return false
}

// SetBillingAccountId gets a reference to the given string and assigns it to the BillingAccountId field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetBillingAccountId(v string) {
	o.BillingAccountId = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetCreatedAt() string {
	if o == nil || IsNil(o.CreatedAt) {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetCreatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasCreatedAt() bool {
	if o != nil && !IsNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetCurrentUsage returns the CurrentUsage field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetCurrentUsage() int32 {
	if o == nil || IsNil(o.CurrentUsage) {
		var ret int32
		return ret
	}
	return *o.CurrentUsage
}

// GetCurrentUsageOk returns a tuple with the CurrentUsage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetCurrentUsageOk() (*int32, bool) {
	if o == nil || IsNil(o.CurrentUsage) {
		return nil, false
	}
	return o.CurrentUsage, true
}

// HasCurrentUsage returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasCurrentUsage() bool {
	if o != nil && !IsNil(o.CurrentUsage) {
		return true
	}

	return false
}

// SetCurrentUsage gets a reference to the given int32 and assigns it to the CurrentUsage field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetCurrentUsage(v int32) {
	o.CurrentUsage = &v
}

// GetCurrentUsageUpdatedAt returns the CurrentUsageUpdatedAt field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetCurrentUsageUpdatedAt() string {
	if o == nil || IsNil(o.CurrentUsageUpdatedAt) {
		var ret string
		return ret
	}
	return *o.CurrentUsageUpdatedAt
}

// GetCurrentUsageUpdatedAtOk returns a tuple with the CurrentUsageUpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetCurrentUsageUpdatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.CurrentUsageUpdatedAt) {
		return nil, false
	}
	return o.CurrentUsageUpdatedAt, true
}

// HasCurrentUsageUpdatedAt returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasCurrentUsageUpdatedAt() bool {
	if o != nil && !IsNil(o.CurrentUsageUpdatedAt) {
		return true
	}

	return false
}

// SetCurrentUsageUpdatedAt gets a reference to the given string and assigns it to the CurrentUsageUpdatedAt field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetCurrentUsageUpdatedAt(v string) {
	o.CurrentUsageUpdatedAt = &v
}

// GetEndAt returns the EndAt field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetEndAt() string {
	if o == nil || IsNil(o.EndAt) {
		var ret string
		return ret
	}
	return *o.EndAt
}

// GetEndAtOk returns a tuple with the EndAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetEndAtOk() (*string, bool) {
	if o == nil || IsNil(o.EndAt) {
		return nil, false
	}
	return o.EndAt, true
}

// HasEndAt returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasEndAt() bool {
	if o != nil && !IsNil(o.EndAt) {
		return true
	}

	return false
}

// SetEndAt gets a reference to the given string and assigns it to the EndAt field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetEndAt(v string) {
	o.EndAt = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetId(v string) {
	o.Id = &v
}

// GetLimitAmount returns the LimitAmount field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetLimitAmount() int32 {
	if o == nil || IsNil(o.LimitAmount) {
		var ret int32
		return ret
	}
	return *o.LimitAmount
}

// GetLimitAmountOk returns a tuple with the LimitAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetLimitAmountOk() (*int32, bool) {
	if o == nil || IsNil(o.LimitAmount) {
		return nil, false
	}
	return o.LimitAmount, true
}

// HasLimitAmount returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasLimitAmount() bool {
	if o != nil && !IsNil(o.LimitAmount) {
		return true
	}

	return false
}

// SetLimitAmount gets a reference to the given int32 and assigns it to the LimitAmount field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetLimitAmount(v int32) {
	o.LimitAmount = &v
}

// GetLimitType returns the LimitType field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetLimitType() string {
	if o == nil || IsNil(o.LimitType) {
		var ret string
		return ret
	}
	return *o.LimitType
}

// GetLimitTypeOk returns a tuple with the LimitType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetLimitTypeOk() (*string, bool) {
	if o == nil || IsNil(o.LimitType) {
		return nil, false
	}
	return o.LimitType, true
}

// HasLimitType returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasLimitType() bool {
	if o != nil && !IsNil(o.LimitType) {
		return true
	}

	return false
}

// SetLimitType gets a reference to the given string and assigns it to the LimitType field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetLimitType(v string) {
	o.LimitType = &v
}

// GetLimitUnit returns the LimitUnit field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetLimitUnit() string {
	if o == nil || IsNil(o.LimitUnit) {
		var ret string
		return ret
	}
	return *o.LimitUnit
}

// GetLimitUnitOk returns a tuple with the LimitUnit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetLimitUnitOk() (*string, bool) {
	if o == nil || IsNil(o.LimitUnit) {
		return nil, false
	}
	return o.LimitUnit, true
}

// HasLimitUnit returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasLimitUnit() bool {
	if o != nil && !IsNil(o.LimitUnit) {
		return true
	}

	return false
}

// SetLimitUnit gets a reference to the given string and assigns it to the LimitUnit field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetLimitUnit(v string) {
	o.LimitUnit = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetName(v string) {
	o.Name = &v
}

// GetOrganizationId returns the OrganizationId field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetOrganizationId() string {
	if o == nil || IsNil(o.OrganizationId) {
		var ret string
		return ret
	}
	return *o.OrganizationId
}

// GetOrganizationIdOk returns a tuple with the OrganizationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetOrganizationIdOk() (*string, bool) {
	if o == nil || IsNil(o.OrganizationId) {
		return nil, false
	}
	return o.OrganizationId, true
}

// HasOrganizationId returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasOrganizationId() bool {
	if o != nil && !IsNil(o.OrganizationId) {
		return true
	}

	return false
}

// SetOrganizationId gets a reference to the given string and assigns it to the OrganizationId field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetOrganizationId(v string) {
	o.OrganizationId = &v
}

// GetStartAt returns the StartAt field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetStartAt() string {
	if o == nil || IsNil(o.StartAt) {
		var ret string
		return ret
	}
	return *o.StartAt
}

// GetStartAtOk returns a tuple with the StartAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetStartAtOk() (*string, bool) {
	if o == nil || IsNil(o.StartAt) {
		return nil, false
	}
	return o.StartAt, true
}

// HasStartAt returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasStartAt() bool {
	if o != nil && !IsNil(o.StartAt) {
		return true
	}

	return false
}

// SetStartAt gets a reference to the given string and assigns it to the StartAt field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetStartAt(v string) {
	o.StartAt = &v
}

// GetTimeframe returns the Timeframe field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetTimeframe() string {
	if o == nil || IsNil(o.Timeframe) {
		var ret string
		return ret
	}
	return *o.Timeframe
}

// GetTimeframeOk returns a tuple with the Timeframe field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetTimeframeOk() (*string, bool) {
	if o == nil || IsNil(o.Timeframe) {
		return nil, false
	}
	return o.Timeframe, true
}

// HasTimeframe returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasTimeframe() bool {
	if o != nil && !IsNil(o.Timeframe) {
		return true
	}

	return false
}

// SetTimeframe gets a reference to the given string and assigns it to the Timeframe field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetTimeframe(v string) {
	o.Timeframe = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetUpdatedAt() string {
	if o == nil || IsNil(o.UpdatedAt) {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) GetUpdatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.UpdatedAt) {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) HasUpdatedAt() bool {
	if o != nil && !IsNil(o.UpdatedAt) {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *GithubComMonadIncCorePkgTypesModelsQuota) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

func (o GithubComMonadIncCorePkgTypesModelsQuota) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GithubComMonadIncCorePkgTypesModelsQuota) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Action) {
		toSerialize["action"] = o.Action
	}
	if !IsNil(o.BillingAccountId) {
		toSerialize["billing_account_id"] = o.BillingAccountId
	}
	if !IsNil(o.CreatedAt) {
		toSerialize["created_at"] = o.CreatedAt
	}
	if !IsNil(o.CurrentUsage) {
		toSerialize["current_usage"] = o.CurrentUsage
	}
	if !IsNil(o.CurrentUsageUpdatedAt) {
		toSerialize["current_usage_updated_at"] = o.CurrentUsageUpdatedAt
	}
	if !IsNil(o.EndAt) {
		toSerialize["end_at"] = o.EndAt
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.LimitAmount) {
		toSerialize["limit_amount"] = o.LimitAmount
	}
	if !IsNil(o.LimitType) {
		toSerialize["limit_type"] = o.LimitType
	}
	if !IsNil(o.LimitUnit) {
		toSerialize["limit_unit"] = o.LimitUnit
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.OrganizationId) {
		toSerialize["organization_id"] = o.OrganizationId
	}
	if !IsNil(o.StartAt) {
		toSerialize["start_at"] = o.StartAt
	}
	if !IsNil(o.Timeframe) {
		toSerialize["timeframe"] = o.Timeframe
	}
	if !IsNil(o.UpdatedAt) {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	return toSerialize, nil
}

type NullableGithubComMonadIncCorePkgTypesModelsQuota struct {
	value *GithubComMonadIncCorePkgTypesModelsQuota
	isSet bool
}

func (v NullableGithubComMonadIncCorePkgTypesModelsQuota) Get() *GithubComMonadIncCorePkgTypesModelsQuota {
	return v.value
}

func (v *NullableGithubComMonadIncCorePkgTypesModelsQuota) Set(val *GithubComMonadIncCorePkgTypesModelsQuota) {
	v.value = val
	v.isSet = true
}

func (v NullableGithubComMonadIncCorePkgTypesModelsQuota) IsSet() bool {
	return v.isSet
}

func (v *NullableGithubComMonadIncCorePkgTypesModelsQuota) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGithubComMonadIncCorePkgTypesModelsQuota(val *GithubComMonadIncCorePkgTypesModelsQuota) *NullableGithubComMonadIncCorePkgTypesModelsQuota {
	return &NullableGithubComMonadIncCorePkgTypesModelsQuota{value: val, isSet: true}
}

func (v NullableGithubComMonadIncCorePkgTypesModelsQuota) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGithubComMonadIncCorePkgTypesModelsQuota) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


