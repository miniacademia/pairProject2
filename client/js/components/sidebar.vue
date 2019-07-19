<template>
    <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
        <ul class="list-unstyled components">
            <p>DASHBOARD</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" disabled>Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a @click="journals" href="#" disabled>Journals</a>
            </li>
            <li>
                <a href="#">Profile</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" disabled>Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" disabled>Portfolio</a>
            </li>
            <li>
                <a href="#" disabled>Contact</a>
            </li>
        </ul>
     </nav>

    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        journals(){
            this.$emit('gorjournals', 'journals')
        }
    }
}
</script>

<style scoped>
    .wrapper {
        width: 100%;
        align-items: stretch;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    #sidebar {
        padding-left: 20px;
        height: 100%;
        background: #37a4cd;
        color: #fff;
        transition: auto;
        position: fixed;
    }

    #sidebar .sidebar-header {
        padding: 20px;
        background: #37a4cd;
    }

    #sidebar ul.components {
        padding: 20px 0;
        border-bottom: 1px solid #37a4cd;
    }

    #sidebar ul p {
        color: #fff;
        padding: 10px;
    }

    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
    }
    #sidebar ul li a:hover {
        color: #37a4cd;
        background: #fff;
    }

    #sidebar ul li.active > a, a[aria-expanded="true"] {
        color: #fff;
        background: #37a4cd;
    }
    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #37a4cd;
    }
</style>

