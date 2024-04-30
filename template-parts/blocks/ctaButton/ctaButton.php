<?php
    $blockName = "cta-button";
    $label = get_field('label');
    $align = get_field('align');
?>

<div class="<?php echo $blockName . '-' . $align; ?>">
    <div class="<?php echo $blockName; ?>">
        <?php echo $label; ?>
    </div>
</div>

<style>
    .<?php echo $blockName; ?>{
        padding: 5px 10px;
        border-radius: 5px;
        color: black;
        font-weight: bold;
        display: inline-block;
        background-color: #d1d1d1;
    }
    .<?php echo $blockName . '-center' ?>{
        text-align: center;
    }
    .<?php echo $blockName . '-right' ?>{
        text-align: right;
    }
</style>

