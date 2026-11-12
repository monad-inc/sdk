

# ModelsFailureSettings

FailureSettings configures dead lettering; nil retries failing records forever. omitempty leaves the ConfigHash unchanged for pipelines without it.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**action** | **ModelsDeadLetterAction** |  |  [optional] |
|**retryFor** | **String** | RetryFor is how long a record may keep failing at one node before it is dead-lettered, as a Go duration. Required. |  [optional] |
|**sink** | [**ModelsFailureSink**](ModelsFailureSink.md) |  |  [optional] |



