#!/usr/bin/env bash
echo "# This file contains cspell exceptions relating to Moodle contributors.."
echo "# It is automatically generated by a GitHub action."
echo "# Please do not make manual modifications to this file as they will be overwritten."
git log \
    --all \
    --format='%aN' | \
    sort -u | \
    sed '/(/d' | \
    sed 's/ /\n/g' | \
    sed -r '/^.{,3}$/d' | \
    sort -u
