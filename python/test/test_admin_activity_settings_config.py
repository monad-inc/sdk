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

from monad.models.admin_activity_settings_config import AdminActivitySettingsConfig

class TestAdminActivitySettingsConfig(unittest.TestCase):
    """AdminActivitySettingsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AdminActivitySettingsConfig:
        """Test AdminActivitySettingsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AdminActivitySettingsConfig`
        """
        model = AdminActivitySettingsConfig()
        if include_optional:
            return AdminActivitySettingsConfig(
                email = ''
            )
        else:
            return AdminActivitySettingsConfig(
        )
        """

    def testAdminActivitySettingsConfig(self):
        """Test AdminActivitySettingsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
