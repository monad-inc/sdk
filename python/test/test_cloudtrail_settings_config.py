# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.cloudtrail_settings_config import CloudtrailSettingsConfig

class TestCloudtrailSettingsConfig(unittest.TestCase):
    """CloudtrailSettingsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CloudtrailSettingsConfig:
        """Test CloudtrailSettingsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CloudtrailSettingsConfig`
        """
        model = CloudtrailSettingsConfig()
        if include_optional:
            return CloudtrailSettingsConfig(
                bucket = '',
                prefix = '',
                region = '',
                role_arn = ''
            )
        else:
            return CloudtrailSettingsConfig(
        )
        """

    def testCloudtrailSettingsConfig(self):
        """Test CloudtrailSettingsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
